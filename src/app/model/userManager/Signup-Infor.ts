export class SignUpInfo {
  name: string;
  username: string;
  email: string;
  password: string;
  role: string[];
  avatarUrl: string;

  constructor(name: string, username: string, email: string, password: string, avatarUrl: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = ['user'];
    this.avatarUrl = avatarUrl;
  }
}
