
function loadingBar(num) {

    let percent = '%'.repeat(num/10);    
    let dots = '.'.repeat(10-num/10);

    if (num == 100) {
        console.log('100% Complete!')
    } else if (num < 100) {
        console.log(`${num}% [${percent}${dots}]`)
        console.log('Still loading...')
    }

}

loadingBar(30);