import moment from "moment";

interface IConfig {
  separator?: string; // default is ;
  missed?: string; // default is 'N/A'
  newLine?: string; // default is '\n'
  wrap?: boolean; // default is true
}

interface IUser {
  userName?: string;
  age?: number;
  birthDate?: Date | string;
}

const defaultConfig: IConfig = {
  separator: ";",
  missed: "N/A",
  newLine: "\n",
  wrap: true,
};

function CSVFormatter(headers: string[], config: IConfig = defaultConfig) {
  const {
    separator = "|",
    missed = "N/A",
    newLine = "\n",
    wrap = true,
  } = config;

  return (data: any) => {
    let resultStr = "";
    for (const key of headers) {
      if (data[key] === undefined || data[key] === null) {
        resultStr += config.missed;
      } else {
        resultStr += data[key];
      }
      if (headers.indexOf(key) == headers.length - 1) {
        resultStr += config.newLine;
      } else {
        resultStr += config.separator;
      }
    }
    return config.wrap ? `"${resultStr}"` : resultStr;
  };
}

const dumpUser = (user: IUser) => {
  user.birthDate = moment(user.birthDate).format();
  return user;
  // return same user, but format date using moment
};

export { CSVFormatter, type IUser, dumpUser };
