import API from "../API/API";
import endpoints from "../API/endpoints";
class AdsService {
  static getAllAds(query = "") {
    return API.get(endpoints.api.ads.getAll + query);
  }
}
export default AdsService;
