


declare type AppRoute = {
  path: string
  component: React.StatelessComponent | React.Component
  viewmodel: any | null
}

declare type AppRoutes = AppRoute[]
