import "@testing-library/jest-dom/extend-expect"
//Enzyme adapter configuration
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });