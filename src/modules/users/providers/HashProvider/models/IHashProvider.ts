export default interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHasgh(payload: string, hashed: string): Promise<boolean>;
}
