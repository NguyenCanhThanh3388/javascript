let num = 4
// let num = Number(prompt("nhập số"))
let count = 0
let N = 2
for (i = 0; i < 20; i++) {
	if (count < num) {
		N++
		if (N % 2 != 0) {
			count++
			console.log(N)
			if (count == num) {
				break
			}
		}

	}
}