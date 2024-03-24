function solve() {
  const textElement = document.getElementById('text');
  const namingConventionElement = document.getElementById('naming-convention');
  const resultElement = document.getElementById('result');

  const convertToPascalCase = text => text
                                          .split(' ')
                                          .reduce((acc, word) => {
                                            word = word[0].toUpperCase() + word.slice(1).toLowerCase();
                                            acc.push(word);
                                            return acc;
                                          }, [])
                                          .join('');

  const convertToCamelCase = text => {
    text = convertToPascalCase(text);
    return text[0].toLowerCase() + text.slice(1);
  }

  const conventionsMapper = {
    'Pascal Case': convertToPascalCase,
    'Camel Case': convertToCamelCase,
  }

  const text = textElement.value;
  const namingConvention = namingConventionElement.value;

  const result = !conventionsMapper[namingConvention] ? 'Error!' : conventionsMapper[namingConvention](text);

  resultElement.textContent = result;
}