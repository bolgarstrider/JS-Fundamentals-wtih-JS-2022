

function matchFullName(input) {
    const pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let fullNmaes = input.match(pattern);
    console.log(fullNmaes.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
