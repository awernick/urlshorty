import Generator from "./generator";

class ShortLink {
  static ALPHABET = /[a-zA-Z0-9-_:~&$!@\(\)*+;=]/

  public slug: string;
  public url: string;
  public generator: Generator;

  constructor(url: string, generator: Generator) {
    this.url = url;
    this.generator = generator;
    this.slug = this.generateSlug();
  }

  generateSlug(): string {
    return this.generator.next();
  }
}
