let num = 0;
let num_length = 0;
let ditoKetik = 1111;

while (true) {
  num += 1;
  str_num = num.toString();
  num_length += str_num.length;
  console.log(str_num, num_length);
  if (num_length >= ditoKetik) {
    break;
  }
}
