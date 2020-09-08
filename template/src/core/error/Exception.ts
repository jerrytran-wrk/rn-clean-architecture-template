export class Exception {}

export class UnKnowException extends Exception {}
export class RemoteException<Raw = any> extends Exception {
  get rootCause(): Raw {
    return this.raw;
  }

  constructor(private readonly raw: Raw) {
    super();
  }
}

export class ServerException extends RemoteException {}

export class UnAuthorizedException extends RemoteException {}

export class LocalException<Raw = any> extends Exception {
  get rootCause(): Raw {
    return this.raw;
  }

  constructor(private readonly raw: Raw) {
    super();
  }
}

export class PermissionDenied extends LocalException {}
