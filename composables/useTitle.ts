
export function useTitle(){

    const route = useRoute()
    let routeArr = route.fullPath.split('/')
  

const title = computed(()=>`${routeArr.at(-1)} of ${routeArr.at(-2)}`)


    return {title}
}