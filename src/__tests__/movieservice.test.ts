/**
 * @jest-environment jsdom
 */
import { expect, jest, test } from "@jest/globals";

import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";
import { mockData } from "../ts/services/__mocks__/movieservice";

//jest.mock("./../ts/services/movieservice.ts");

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve, reject) => {
      let searchText: string = "hej";
      if (searchText) {
        resolve({
          data: {
            Search: mockData,
          },
        });
      } else reject("inget hittades");
    });
  },
}));

describe("getData", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("Should get mock data", async () => {
    //arrange
    let searchText: string = "hej";

    //act
    let response: IMovie[] = await getData(searchText);

    //assert

    expect(response.length).toBe(4);
    expect(response[0].Title).toBe("Harry Zotter 1");
  });

  test("should not get mackData", async () => {
    //arrange
    let searchText: string = "";
    //act
    try {
      await getData(searchText);
    } catch (response: any) {
      expect(response.length).toBe(0);
    }
  });
});
