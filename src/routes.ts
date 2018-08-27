import {
  Home, About
} from './page'
// import { TodosViewModel } from './viewmodel';

export default [
  { path: '/', component: Home, viewmodel: null },
  { path: '/about', component: About, viewmodel: null },
] as AppRoutes

