/** Project Standarts:
     -Logging standarts
     -Naming standarts:
        function, method, variable => CAMEL;
        class => PASCAL;
        folder, file => KEBAB;
        css => SNAKE;
**/

// ERROR HANDLING:
export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  SOMETHING_WENT_WRONG = "Something went wrong!",
  NO_DATA_FOUND = "No data is found!",
  CREATE_FAILED = "Create is failed!",
  UPDATE_FAILED = "update is failed!",

  NO_MEMBER_NICK = "No member with that nickname!",
  USED_NICK_PHONE = "You are inserting already used nick or number!",
  WRONG_PASSWORD = "Wrong password,  please try again!",
  NOT_AUTHENTICATED = "You are not authenticated, Please login first!",
}

class Errors extends Error {
  // classni "Errors" deb nomladik va "JavaScript" ichida 'build-in' bo'lgan "Error"ga 'extends' qildik
  public code: HttpCode;
  public message: Message;

  static standart = {
    code: HttpCode.INTERNAL_SERVER_ERROR,
    message: Message.SOMETHING_WENT_WRONG,
  };

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;
