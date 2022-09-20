function ThePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0
    let lapis = 0;
    let gold = 0;
    let height = 0;

    for (let i = base; i >= 1; i -= 2) {
        if (i <= 2) {
            gold += i*i;
            height++;
        } else if ((height + 1) % 5 == 0) {
            lapis += (i * 4) - 4;
            stone += (i * i) - ((i * 4) - 4);
            height++;
        } else {
            marble += (i * 4) - 4;
            stone += (i * i) - ((i * 4) - 4);
            height++;
        }
    }

    let totalStone = Math.ceil(stone * increment);
    let totalMarble = Math.ceil(marble * increment);
    let totalLapis = Math.ceil(lapis * increment);
    let totalGold = Math.ceil(gold * increment);
    let totalHeight = Math.floor(height * increment);

    console.log(`Stone required: ${totalStone}`);
    console.log(`Marble required: ${totalMarble}`);
    console.log(`Lapis Lazuli required: ${totalLapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${totalHeight}`)



}

ThePyramidOfKingDjoser(23, 0.5)