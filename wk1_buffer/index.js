console.log("hello world")

console.log(__dirname)
console.log(__filename)

//buffer
//const buf = Buffer.from('Hello world', 'utf8'). //defaults to utf8
const buf = Buffer.from('Hello world') //from allows us to create new buffer object from the string we provide

console.log(buf) //displays hexidecimal
//need to use tostring to convert buffer to string
console.log(buf.toString())
console.log(buf.toJSON())
console.log(buf.length)

console.log(buf[0])
console.log(buf[1])

//buffer allows you to allocate space, but address is handled in the background
//space given in the heap. will assign if we know if we need it later on
var buf1 = Buffer.alloc(8)
var buf2 = Buffer.allocUnsafe(8) //assigns 0 as values
console.log(buf1)
console.log(buf2)

console.log(buf.toString('utf8',2,9)) //prints range. need to specify the encoding

const str = "A💩"
const buf3 = Buffer.from(str)
console.log(buf3)
console.log(buf3.length)
console.log(buf3.toString('utf8', 0,5)) //emoji can be multiple indexes. so we use range to access it

for(c of buf.entries()){
    console.log(c)
}

console.log(buf.toString('hex')) //print the buffer as hex

const buf4 = Buffer.alloc(4, 'A') //4 bytes. putting in number as argument will pass ascii. so (4, 66) would fill it with BBBB
console.log(buf4.toString())

const buf5 = Buffer.from('AAAA')

console.log(buf4.equals(buf))
console.log(buf4.equals(buf5)) //checks if contents are the same

var buf6 = Buffer.from('ABCD')
console.log(buf5.compare(buf6)) //-1 first is smaller, 1 first is larger, 0 they are same

const a = [buf5, buf] //array of buffer
console.log(a)

const buf7 = Buffer.concat(a)
console.log(buf7.toString())

//copy
var buf6 = Buffer.from('1234567890')
buf6.copy(buf1) //copy will only copy up to the size. if we copying less than the space, it ok, if not, it will get cut off
console.log(buf1.toString())

console.log(`Len: ${buf1.length}`)

buf1 = Buffer.alloc(8)
buf6.copy(buf1, 4, 0, 4)
console.log(buf1.toString())

