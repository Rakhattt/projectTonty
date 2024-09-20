export interface IPropsFilter {
  options: { text: string; value: string }[];
  activeSort: string;
}
export interface IPropsModal {
  visible: boolean;
}
export interface IPropsProduct {
  image: string;
  title: string;
  rating: number;
  price: number;
  id: string;
}
export interface IPropsSearchBar {
  placeholder: string;
}
export interface ISignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface ILogin {
  login: string;
}
export interface ISignInData {
  email: string;
  code: string;
}
export interface ILinksHeader {
  title: string,
  url: string,
}
export interface IPropsModalClient {
  login: string,
  password: string;
  visible: boolean;
}
export interface IloginCreate {
  login: string,
  name: string;
}