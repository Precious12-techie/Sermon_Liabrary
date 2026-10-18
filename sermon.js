let sermon = [
  {
    id: 1,
    tittle: "Rock of Ages",
    preacher: "Pastor David",
    date: "20-10-2026",
    download: 100,
    topics: ["Faith", "Hope"],

    metadata: {
      language: "english",
      format: "audio",
    },
  },

  {
    id: 2,
    tittle: " Our Maker",
    preacher: "Pastor Peter",
    date: "12-11-2026",
    download: 200,
    topics: ["Salvation", "Love"],

    metadata: {
      language: "english",
      format: "audio",
    },
  },

  {
    id: 3,
    tittle: " Our Father",
    preacher: "Rev. John",
    date: "15-11-2026",
    download: 250,
    topics: ["Religion", "Love"],

    metadata: {
      language: "english",
      format: "audio",
    },
  },

  {
    id: 4,
    tittle: " Cry Out",
    preacher: "Rev. Samson",
    date: "19-11-2026",
    download: 250,
    topics: ["Comfort", "Love"],

    metadata: {
      language: "French",
      format: "video",
    },
  },

  {
    id: 5,
    tittle: " Helper",
    preacher: "Rev. Johnson",
    date: "19-11-2026",
    download: 250,
    topics: ["Comfort", "Love"],

    metadata: {
      language: "French",
      format: "audio",
    },
  },
];
console.log(sermon);

// using factory function
function createSermon(
  id,
  tittle,
  preacher,
  date,
  download,
  topics,
  language,
  format,
) {
  return {
    id: id,
    tittle: tittle,
    preacher: preacher,
    date: date,
    download: download,
    topics: topics,
    metadata: {
      language: language,
      format: format,
    },
  };
}
const createSermon1 = createSermon(
  1,
  "Helper",
  "Pastor David",
  "20-10-2026",
  200,
  ["Salvation", "Love"],
  "English",
  "audio",
);
const createSermon2 = createSermon(
  2,
  "Helper",
  "Pastor David",
  "20-10-2026",
  200,
  ["Salvation", "Love"],
  "English",
  "audio",
);
const createSermon3 = createSermon(
  3,
  "Helper",
  "Pastor David",
  "20-10-2026",
  200,
  ["Salvation", "Love"],
  "English",
  "audio",
);
const createSermon4 = createSermon(
  4,
  "Helper",
  "Pastor David",
  "20-10-2026",
  200,
  ["Salvation", "Love"],
  "English",
  "audio",
);
const createSermon5 = createSermon(
  5,
  "Helper",
  "Rev. Samson",
  "20-10-2026",
  200,
  ["Salvation", "Love"],
  "English",
  "audio",
);

console.log(createSermon);

// adding,update,delete

const s1 = sermon[1];
s1.download = 500;
s1.metadata.language = "igbo";
delete s1.date;
console.log(s1);

// using destructing
const { tittle, preacher, topics, download, date } = sermon[1];

console.log(tittle, preacher, topics, download, date);

// using optional chaining

console.log(sermon[0].topics?.[0]);

// OBJECT.KEYS()
for (let keys in sermon) {
  console.log(keys);
  console.log(Object.keys(sermon[1]));
  console.log(sermon[keys]);
}

// OBJECT HASOWN
console.log(Object.hasOwn(sermon[0], "preacher"));
console.log(Object.hasOwn(sermon[2], "date"));

// OBJECT ASSIGN

const service = Object.assign({}, sermon[4]);
const service2 = structuredClone(sermon[1]);
console.log(service);

// adding in an array
const include = sermon.push(
  createSermon(6, "entry", "pst paul", "11-11-2027", 100, ["angels", "spirit"]),
);
console.log(sermon);
// removing from
const remove = sermon.pop();
console.log(sermon);

// flittering
const religion = sermon.filter((x) => x.topics.includes("Salvation"));
console.log(religion);

// find
const findSermon = sermon.find((x) => x.preacher === "Rev. Samson");

console.log(findSermon);

// sort
const sortSermon = sermon.sort((a, b) => b.downloads - a.download);
console.log(sortSermon);

// mapping
const tittles = sermon.map((x) => x.tittle.toUpperCase());
console.log(tittles);

// flatmap
const tittles1 = sermon.flatMap((sermon) => sermon.id);
console.log(tittles1);

// reduce
const sumTotalDownloads = sermon.reduce((sum, x) => sum + x.downloads, 0);
console.log("total download:", sumTotalDownloads);

// OBJECT GROUPED BY
const groupSermon = Object.groupBy(sermon, (sermons) => sermons.preacher);

console.log(groupSermon);

// toSorted
const sortedSermon1 = sermon.toSorted((a, b) => b.downloads - a.download);
console.log(sortedSermon1);

function generateSermonReport(sermon) {
  console.log("Total Sermons:", sermon.length);
  console.log(
    "Total Download:",
    sermon.reduce((sum, x) => sum + x.download, 0),
  );
}
console.log(
  "Total download:",
  sermon.toSorted((a, b) => b.download - a.download)[0].tittle,
);
generateSermonReport(sermon);
