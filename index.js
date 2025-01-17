const str = `The CSS Flex Container
The CSS flex-direction Property
The CSS flex-wrap Property
The CSS flex-flow Property
The CSS justify-content Property
The CSS align-items Property
The CSS align-content Property
Perfect Centering`;

const markdownObject = {
  str: str,
};

const sectionsList = str.split("\n");

function toInternalMarkdownLink(inputString) {
  let arr = inputString.split(" ").join("-").toLowerCase();

  return `- [${inputString}](#${arr})`;
}

function toMarkdownHeadingTwo(inputString) {
  return `## ${inputString}`;
}

function getHeadingTwoMarkdownLinks() {
  for (let i = 0; i < sectionsList.length; i++) {
    console.log(toMarkdownHeadingTwo(sectionsList[i]));
  }
}

function getInternalMarkdownLinks() {
  for (let i = 0; i < sectionsList.length; i++) {
    console.log(toInternalMarkdownLink(sectionsList[i]));
  }
}

function test1() {
  const hardCodedString =
    "- [The CSS flex-direction Property](#the-css-flex-direction-property)";

  console.log(`hardCodedString: `, hardCodedString);
  console.log(
    `toInternalMarkdownLink :`,
    toInternalMarkdownLink(inputDataString)
  );
}

const inputDataString = "The CSS flex-direction Property";

function main() {
  //   test1();
  getInternalMarkdownLinks();
  console.log("\n");
  getHeadingTwoMarkdownLinks();
}

// str
// .split("\n")
// .map((v) => v.split(" ").join("-"))
// .map((v) => `${v.toLowerCase()}`);

// function toInternalMarkdownLink(inputString) {
//   let lowerString = inputString.toLowerCase();
//   const arr = lowerString.split("\n").join("-");
// }

main();
