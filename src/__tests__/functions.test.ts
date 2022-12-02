import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";
jest.mock("./../ts/services/movieservice.ts");

describe("movieSort", () => {
  test("Should sort the list", async () => {
    //Arrange
    let searchText: string = "hej";
    let movies: IMovie[] = await getData(searchText);

    //Act
    movieSort(movies);

    //Assert

    expect(movies[0].Title).toBe("Harry Potter 3");
    expect(movies[3].Title).toBe("Harry Zotter 1");
  });

  test("Should sort the list", async () => {
    //Arrange
    let searchText: string = "hej";
    let movies: IMovie[] = await getData(searchText);

    //Act
    movieSort(movies, false);

    //Assert
    expect(movies[3].Title).toBe("Harry Potter 3");
    expect(movies[0].Title).toBe("Harry Zotter 1");
  });
});
