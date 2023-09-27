import { CSVFormatter, IUser, dumpUser } from "./formatter";

const headers = {
  userName: "User name",
  age: "Age",
  birthDate: "Date of birth",
};
const format = CSVFormatter(Object.keys(headers), {
  separator: "|", // default is ;
  missed: "Empty", // default is 'N/A'
  newLine: "\n", // default is '\n'
  wrap: false, // default is true
});

const users: IUser[] = [
  { userName: "Paul1408", age: 19, birthDate: new Date("07.11.2003") },
  { userName: "Kum", age: 20, birthDate: new Date("07.11.2002") },
  { age: 21, birthDate: new Date("07.11.2002") },
];

const csv = [];

csv.push(format(headers));

for (const user of users) {
  const dump = dumpUser(user);

  csv.push(format(dump));
}

console.log(csv);
