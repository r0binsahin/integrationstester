/**
 * @jest-environment jsdom
 */
import { jest } from "@jest/globals";
import { IMovie } from "../ts/models/Movie";
import * as theApp from "../ts/movieApp";
import { getData } from "../ts/services/movieservice";

jest.mock("./../ts/services/movieservice.ts");

//Arrange
//Act
//Assert

//1X

describe("init", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("should be able to call  handleSubmit", () => {
    //Arrange

    let spy = jest.spyOn(theApp, "handleSubmit").mockReturnValue(
      new Promise((resolve) => {
        resolve();
      })
    );

    document.body.innerHTML = `
    <form id="searchForm">
    <button type="submit" id="search">Sök</button>
    </form>
      `;

    theApp.init();

    //Act
    (document.getElementById("searchForm") as HTMLFormElement)?.submit();

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

//2 HANDLESUBMIT
describe("handleSubmit", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("Should call createHTML", async () => {
    //Arrange
    document.body.innerHTML = `  <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
    </form> <div id="movie-container"></div>`;

    let spy = jest.spyOn(theApp, "createHtml").mockReturnValue();

    //Act
    await theApp.handleSubmit();

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

//3 CREATE HTML
describe("createHTLM", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("Should create HTML ", async () => {
    //Arrange
    document.body.innerHTML = "";

    document.body.innerHTML = `<div id="movie-container"></div>`;
    let searchText: string = "hej";
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    let movies: IMovie[] = await getData(searchText);

    //Act
    theApp.createHtml(movies, container);

    //Assset
    expect(document.querySelectorAll("div.movie")?.length).toBe(4);
    expect(document.querySelectorAll("h3")?.length).toBe(4);
    expect(document.querySelectorAll("img")?.length).toBe(4);
  });
});

//4
describe("displayNoResult", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("Should display a message", () => {
    //Arrange
    let container: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;

    //Act
    theApp.displayNoResult(container);

    //Assert
    expect(container.innerHTML).toBe(`<p>Inga sökresultat att visa</p>`);
  });
});
