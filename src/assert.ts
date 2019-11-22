// アサートする
export default function assert(assertion: boolean, message: string = ''): void {
  if (!assertion) {
    throw new AssertionError(message);
  }
}

export class AssertionError extends Error {
  constructor(message: string = '') {
    super(message);
  }
}
