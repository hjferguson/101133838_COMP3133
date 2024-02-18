const jwt = require('jsonwebtoken');
const User = require('./models/user');
const Employee = require('./models/employee');
const bcrypt = require('bcryptjs');

const JWT_SECRET = '123456789'; // made this poor for project. would be more secure, and hidden if actually using

const createToken = (user, secret, expiresIn) => {
  const { id, email, username } = user;
  return jwt.sign({ id, email, username }, secret, { expiresIn });
};

const resolvers = {
  Query: {
    async login(_, { username, password }) {
      const user = await User.findOne({ $or: [{ username }, { email: username }] });
      if (!user) {
        throw new Error('User not found');
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error('Invalid password');
      }

      return {
        token: createToken(user, JWT_SECRET, '1h'),
        user,
      };
    },
    async getAllEmployees() {
      return await Employee.find({});
    },
    async searchEmployeeById(_, { _id }) {
      return await Employee.findById(_id);
    },
  },
  Mutation: {
    async signUp(_, { input }) {
      const { username, email, password } = input;
      const userExists = await User.findOne({ $or: [{ username }, { email }] });
      if (userExists) {
        throw new Error('User already exists with that username or email');
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      const result = await newUser.save();

      return {
        token: createToken(result, JWT_SECRET, '1h'),
        user: result,
      };
    },
    async addNewEmployee(_, { input }) {
      const { first_name, last_name, email, gender, salary } = input;

      const newEmployee = new Employee({
        first_name,
        last_name,
        email,
        gender,
        salary,
      });

      return await newEmployee.save();
    },
    async updateEmployeeById(_, { input }) {
      const { _id, first_name, last_name, email, gender, salary } = input;
      
      const update = {};
      if (first_name !== undefined) update.first_name = first_name;
      if (last_name !== undefined) update.last_name = last_name;
      if (email !== undefined) update.email = email;
      if (gender !== undefined) update.gender = gender;
      if (salary !== undefined) update.salary = salary;

      return await Employee.findByIdAndUpdate(_id, update, { new: true });
    },
    async deleteEmployeeById(_, { _id }) {
      await Employee.findByIdAndDelete(_id);
      return "Employee deleted successfully";
    },
  },
};

module.exports = resolvers;
