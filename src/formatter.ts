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
    const records = headers
      .map((key) => {
        if (data[key] === undefined || data[key] === null) {
          return wrap ? `"${missed}"` : missed;
        }
        return wrap ? `"${data[key]}"` : data[key];
      })
      .join(separator);

    return `${records}${newLine}`;
  };
}

const dumpUser = (user: IUser) => {
  user.birthDate = moment(user.birthDate).format();
  return user;
};

export { CSVFormatter, type IUser, dumpUser };
