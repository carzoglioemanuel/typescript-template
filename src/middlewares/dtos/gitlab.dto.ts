import { IsString } from "class-validator";

export class GitlabDTO {
  @IsString()
  userId!: string;

  @IsString()
  name!: string;
}
