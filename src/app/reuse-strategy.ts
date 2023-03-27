import { ActivatedRouteSnapshot, BaseRouteReuseStrategy } from "@angular/router";

export class CustomRouteReuseStrategy extends BaseRouteReuseStrategy {
  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and current route config are
   * identical.
   */
  override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return (future.routeConfig === curr.routeConfig) || future.data['reuseComponent'] && curr.data['reuseComponent'];
  }

}