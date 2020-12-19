import { APIError } from "src/types/error";

interface ResultValue<T> {
  result: "value";
  value: T;
}

interface ResultError<E extends APIError> {
  result: "error";
  error: E;
}

type Res<T, E extends APIError> = ResultValue<T> | ResultError<E>;

export class Result<T, E extends APIError = APIError> {
  constructor(public result: Res<T, E>) {}

  static withValue<T>(value: T): Result<T, any> {
    return new Result({ result: "value", value });
  }

  static withError<E extends APIError>(error: E): Result<any, E> {
    return new Result({ result: "error", error });
  }

  public unwrap(): T {
    switch (this.result.result) {
      case "value":
        return this.result.value;
      case "error":
        throw new TypeError(`${this.result.error.error}, ${this.result.error.message}`);
    }
  }
}
