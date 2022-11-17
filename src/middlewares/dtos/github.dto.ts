import { IsString } from "class-validator";

export class GithubDTO {
  @IsString()
  name!: string;
}
