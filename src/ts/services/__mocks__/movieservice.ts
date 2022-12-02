import { IMovie } from "../../models/Movie";

export const mockData: IMovie[] = [
  {
    Title: "Harry Zotter 1",
    imdbID: "1",
    Type: "Movie",
    Poster: "Harry Zotter 1",
    Year: "2001",
  },
  {
    Title: "Harry Xotter 2",
    imdbID: "2",
    Type: "Movie",
    Poster: "Harry Xotter 2",
    Year: "2002",
  },
  {
    Title: "Harry Xotter 2",
    imdbID: "2",
    Type: "Movie",
    Poster: "Harry Xotter 2",
    Year: "2002",
  },
  {
    Title: "Harry Potter 3",
    imdbID: "3",
    Type: "Movie",
    Poster: "Harry Potter 3",
    Year: "2003",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve, reject) => {
    let searchText: string = "hej";

    if (searchText !== "") resolve(mockData);
    else {
      reject();
    }
  });
};
