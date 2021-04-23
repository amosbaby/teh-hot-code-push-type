import { __decorate, __extends } from "tslib"
import { Injectable } from "@angular/core"
import {
  IonicNativePlugin,
  checkAvailability,
  cordova,
} from "@ionic-native/core"
import { Observable } from "rxjs"
/**
 * For description on error codes, please visit https://github.com/nordnet/cordova-hot-code-push/wiki/Error-codes
 */
export var ErrorCode
;(function(ErrorCode) {
  ErrorCode[(ErrorCode["NOTHING_TO_INSTALL"] = 1)] = "NOTHING_TO_INSTALL"
  ErrorCode[(ErrorCode["NOTHING_TO_UPDATE"] = 2)] = "NOTHING_TO_UPDATE"
  ErrorCode[(ErrorCode["FAILED_TO_DOWNLOAD_APPLICATION_CONFIG"] = -1)] =
    "FAILED_TO_DOWNLOAD_APPLICATION_CONFIG"
  ErrorCode[(ErrorCode["APPLICATION_BUILD_VERSION_TOO_LOW"] = -2)] =
    "APPLICATION_BUILD_VERSION_TOO_LOW"
  ErrorCode[(ErrorCode["FAILED_TO_DOWNLOAD_CONTENT_MANIFEST"] = -3)] =
    "FAILED_TO_DOWNLOAD_CONTENT_MANIFEST"
  ErrorCode[(ErrorCode["FAILED_TO_DOWNLOAD_UPDATE_FILES"] = -4)] =
    "FAILED_TO_DOWNLOAD_UPDATE_FILES"
  ErrorCode[
    (ErrorCode["FAILED_TO_MOVE_LOADED_FILES_TO_INSTALLATION_FOLDER"] = -5)
  ] = "FAILED_TO_MOVE_LOADED_FILES_TO_INSTALLATION_FOLDER"
  ErrorCode[(ErrorCode["UPDATE_IS_INVALID"] = -6)] = "UPDATE_IS_INVALID"
  ErrorCode[(ErrorCode["FAILED_TO_COPY_FILES_FROM_PREVIOUS_RELEASE"] = -7)] =
    "FAILED_TO_COPY_FILES_FROM_PREVIOUS_RELEASE"
  ErrorCode[(ErrorCode["FAILED_TO_COPY_NEW_CONTENT_FILES"] = -8)] =
    "FAILED_TO_COPY_NEW_CONTENT_FILES"
  ErrorCode[(ErrorCode["LOCAL_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND"] = -9)] =
    "LOCAL_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND"
  ErrorCode[(ErrorCode["LOCAL_VERSION_OF_MANIFEST_NOT_FOUND"] = -10)] =
    "LOCAL_VERSION_OF_MANIFEST_NOT_FOUND"
  ErrorCode[
    (ErrorCode["LOADED_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND"] = -11)
  ] = "LOADED_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND"
  ErrorCode[(ErrorCode["LOADED_VERSION_OF_MANIFEST_NOT_FOUND"] = -12)] =
    "LOADED_VERSION_OF_MANIFEST_NOT_FOUND"
  ErrorCode[(ErrorCode["FAILED_TO_INSTALL_ASSETS_ON_EXTERNAL_STORAGE"] = -13)] =
    "FAILED_TO_INSTALL_ASSETS_ON_EXTERNAL_STORAGE"
  ErrorCode[(ErrorCode["CANT_INSTALL_WHILE_DOWNLOAD_IN_PROGRESS"] = -14)] =
    "CANT_INSTALL_WHILE_DOWNLOAD_IN_PROGRESS"
  ErrorCode[
    (ErrorCode["CANT_DOWNLOAD_UPDATE_WHILE_INSTALLATION_IN_PROGRESS"] = -15)
  ] = "CANT_DOWNLOAD_UPDATE_WHILE_INSTALLATION_IN_PROGRESS"
  ErrorCode[(ErrorCode["INSTALLATION_ALREADY_IN_PROGRESS"] = -16)] =
    "INSTALLATION_ALREADY_IN_PROGRESS"
  ErrorCode[(ErrorCode["DOWNLOAD_ALREADY_IN_PROGRESS"] = -17)] =
    "DOWNLOAD_ALREADY_IN_PROGRESS"
  ErrorCode[(ErrorCode["ASSETS_FOLDER_IS_NOT_YET_INSTALLED"] = -18)] =
    "ASSETS_FOLDER_IS_NOT_YET_INSTALLED"
  ErrorCode[(ErrorCode["NEW_APPLICATION_CONFIG_IS_INVALID"] = -19)] =
    "NEW_APPLICATION_CONFIG_IS_INVALID"
})(ErrorCode || (ErrorCode = {}))
var HotCodePush = /** @class */ (function(_super) {
  __extends(HotCodePush, _super)
  function HotCodePush() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  HotCodePush.prototype.requestApplicationUpdate = function(message) {
    return cordova(this, "requestApplicationUpdate", {}, arguments)
  }
  HotCodePush.prototype.fetchUpdate = function(options) {
    var _this = this
    return (function() {
      if (checkAvailability(_this) === true) {
        return new Promise(function(resolve, reject) {
          HotCodePush.getPlugin().fetchUpdate(function(error, data) {
            if (error) {
              reject(error)
            } else {
              resolve(data)
            }
          }, options)
        })
      }
    })()
  }
  HotCodePush.prototype.installUpdate = function(options) {
    var _this = this
    return (function() {
      if (checkAvailability(_this) === true) {
        return new Promise(function(resolve, reject) {
          HotCodePush.getPlugin().installUpdate(function(error, data) {
            if (error) {
              reject(error)
            } else {
              resolve(data)
            }
          }, options)
        })
      }
    })()
  }
  HotCodePush.prototype.isUpdateAvailableForInstallation = function() {
    return cordova(
      this,
      "isUpdateAvailableForInstallation",
      { callbackStyle: "node" },
      arguments
    )
  }
  HotCodePush.prototype.getVersionInfo = function() {
    return cordova(this, "getVersionInfo", { callbackStyle: "node" }, arguments)
  }
  HotCodePush.prototype.onUpdateIsReadyToInstall = function() {
    return cordova(
      this,
      "onUpdateIsReadyToInstall",
      {
        eventObservable: true,
        element: "document",
        event: "chcp_updateIsReadyToInstall",
      },
      arguments
    )
  }
  HotCodePush.prototype.onUpdateLoadFailed = function() {
    return cordova(
      this,
      "onUpdateLoadFailed",
      {
        eventObservable: true,
        element: "document",
        event: "chcp_updateLoadFailed",
      },
      arguments
    )
  }
  HotCodePush.prototype.onNothingToUpdate = function() {
    return cordova(
      this,
      "onNothingToUpdate",
      {
        eventObservable: true,
        element: "document",
        event: "chcp_nothingToUpdate",
      },
      arguments
    )
  }
  HotCodePush.prototype.onBeforeInstall = function() {
    return cordova(
      this,
      "onBeforeInstall",
      {
        eventObservable: true,
        element: "document",
        event: "chcp_beforeInstall",
      },
      arguments
    )
  }
  HotCodePush.prototype.onUpdateInstalled = function() {
    return cordova(
      this,
      "onUpdateInstalled",
      {
        eventObservable: true,
        element: "document",
        event: "chcp_updateInstalled",
      },
      arguments
    )
  }
  HotCodePush.prototype.onUpdateInstallFailed = function() {
    return cordova(
      this,
      "onUpdateInstallFailed",
      {
        eventObservable: true,
        element: "document",
        event: "chcp_updateInstallFailed",
      },
      arguments
    )
  }
  HotCodePush.prototype.onNothingToInstall = function() {
    return cordova(
      this,
      "onNothingToInstall",
      {
        eventObservable: true,
        element: "document",
        event: "chcp_nothingToInstall",
      },
      arguments
    )
  }
  HotCodePush.prototype.onBeforeAssetsInstalledOnExternalStorage = function() {
    return cordova(
      this,
      "onBeforeAssetsInstalledOnExternalStorage",
      {
        eventObservable: true,
        element: "document",
        event: "chcp_beforeAssetsInstalledOnExternalStorage",
      },
      arguments
    )
  }
  HotCodePush.prototype.onAssetsInstalledOnExternalStorage = function() {
    return cordova(
      this,
      "onAssetsInstalledOnExternalStorage",
      {
        eventObservable: true,
        element: "document",
        event: "chcp_assetsInstalledOnExternalStorage",
      },
      arguments
    )
  }
  HotCodePush.prototype.onAssetsInstallationError = function() {
    return cordova(
      this,
      "onAssetsInstallationError",
      {
        eventObservable: true,
        element: "document",
        event: "chcp_assetsInstallationError",
      },
      arguments
    )
  }
  HotCodePush.prototype.downloadProgress = function() {
    return cordova(
      this,
      "downloadProgress",
      {
        eventObservable: true,
        element: "document",
        event: "chcp_downloadProgress",
      },
      arguments
    )
  }
  HotCodePush.pluginName = "HotCodePush"
  HotCodePush.plugin = "cordova-hot-code-push"
  HotCodePush.pluginRef = "chcp"
  HotCodePush.repo = "https://github.com/amosbaby/cordova-hot-code-push.git"
  HotCodePush.platforms = ["Android", "iOS"]
  HotCodePush = __decorate([Injectable()], HotCodePush)
  return HotCodePush
})(IonicNativePlugin)
export { HotCodePush }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RlaC1ob3QtY29kZS1wdXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLGlEQUtOLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQW9EbEM7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxTQXNCWDtBQXRCRCxXQUFZLFNBQVM7SUFDbkIscUVBQXNCLENBQUE7SUFDdEIsbUVBQXFCLENBQUE7SUFDckIsNEdBQTBDLENBQUE7SUFDMUMsb0dBQXNDLENBQUE7SUFDdEMsd0dBQXdDLENBQUE7SUFDeEMsZ0dBQW9DLENBQUE7SUFDcEMsc0lBQXVELENBQUE7SUFDdkQsb0VBQXNCLENBQUE7SUFDdEIsc0hBQStDLENBQUE7SUFDL0Msa0dBQXFDLENBQUE7SUFDckMsNEhBQWtELENBQUE7SUFDbEQseUdBQXlDLENBQUE7SUFDekMsK0hBQW9ELENBQUE7SUFDcEQsMkdBQTBDLENBQUE7SUFDMUMsMkhBQWtELENBQUE7SUFDbEQsaUhBQTZDLENBQUE7SUFDN0MseUlBQXlELENBQUE7SUFDekQsbUdBQXNDLENBQUE7SUFDdEMsMkZBQWtDLENBQUE7SUFDbEMsdUdBQXdDLENBQUE7SUFDeEMscUdBQXVDLENBQUE7QUFDekMsQ0FBQyxFQXRCVyxTQUFTLEtBQVQsU0FBUyxRQXNCcEI7O0lBd0NnQywrQkFBaUI7Ozs7SUFPaEQsOENBQXdCLGFBQUMsT0FBZTtJQVV4QyxpQ0FBVyxhQUFDLE9BQW1DOzs7bURBQWdCO2dCQUM3RCxPQUFPLElBQUksT0FBTyxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQ3RDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQ2pDLFVBQUMsS0FBdUIsRUFBRSxJQUFTO3dCQUNqQyxJQUFJLEtBQUssRUFBRTs0QkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2Y7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNmO29CQUNILENBQUMsRUFDRCxPQUFPLENBQ1IsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFTRCxtQ0FBYTtJQVdiLHNEQUFnQztJQVdoQyxvQ0FBYztJQWFkLDhDQUF3QjtJQWF4Qix3Q0FBa0I7SUFhbEIsdUNBQWlCO0lBYWpCLHFDQUFlO0lBYWYsdUNBQWlCO0lBYWpCLDJDQUFxQjtJQWFyQix3Q0FBa0I7SUFhbEIsOERBQXdDO0lBYXhDLHdEQUFrQztJQWFsQywrQ0FBeUI7SUFhekIsc0NBQWdCOzs7Ozs7SUE1TUwsV0FBVztRQUR2QixVQUFVLEVBQUU7T0FDQSxXQUFXO3NCQTVIeEI7RUE0SGlDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhQ2hlY2ssXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW5cbn0gZnJvbSBcIkBpb25pYy1uYXRpdmUvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbmRlY2xhcmUgdmFyIGNoY3A6IGFueTtcbmV4cG9ydCBpbnRlcmZhY2UgSG90Q29kZVB1c2hEb3duUHJvZ3Jlc3Mge1xuICBjdXJyZW50OiBudW1iZXI7XG4gIHRvdGFsOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEhvdENvZGVQdXNoVmVyc2lvbiB7XG4gIC8qKlxuICAgKiBBcHBsaWNhdGlvbidzIHZlcnNpb24gbmFtZS4gVGhpcyB2ZXJzaW9uIGlzIHZpc2libGUgdG8gdGhlIHVzZXIgb24gdGhlIHN0b3Jlcy5cbiAgICovXG4gIGFwcFZlcnNpb246IHN0cmluZztcbiAgLyoqXG4gICAqIEFwcGxpY2F0aW9uJ3MgYnVpbGQgdmVyc2lvbiBudW1iZXIuXG4gICAqL1xuICBidWlsZFZlcnNpb246IHN0cmluZztcbiAgLyoqXG4gICAqIFZlcnNpb24gb2YgdGhlIHdlYiBjb250ZW50LCB0aGF0IGlzIGRpc3BsYXllZCB0byB0aGUgdXNlci4gQmFzaWNhbGx5LCB2YWx1ZSBvZiB0aGUgcmVsZWFzZSBwcm9wZXJ0eSBmcm9tIGNoY3AuanNvbiBmaWxlIGluIHlvdXIgbG9jYWwgd3d3IGZvbGRlci5cbiAgICovXG4gIGN1cnJlbnRXZWJWZXJzaW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQcmV2aW91cyB3ZWIgY29udGVudCB2ZXJzaW9uLiBUaGlzIGlzIGEgdmVyc2lvbiBvZiBvdXIgYmFja3VwLiBDYW4gYmUgZW1wdHksIGlmIHRoZXJlIHdlcmUgbm8gdXBkYXRlcyBpbnN0YWxsZWQuXG4gICAqL1xuICBwcmV2aW91c1dlYlZlcnNpb246IHN0cmluZztcbiAgLyoqXG4gICAqIFZlcnNpb24gbnVtYmVyIG9mIHRoZSB3ZWIgY29udGVudCwgdGhhdCB3YXMgbG9hZGVkIGJ5IHRoZSBwbHVnaW4gYW5kIHJlYWR5IHRvIGJlIGluc3RhbGxlZC4gQmFzaWNhbGx5LCB2YWx1ZSBvZiB0aGUgcmVsZWFzZSBwcm9wZXJ0eSBmcm9tIGNoY3AuanNvbiBmaWxlIG9uIHlvdXIgc2VydmVyLiBDYW4gYmUgZW1wdHksIGlmIG5vIHVwZGF0ZSBpcyB3YWl0aW5nIGZvciBpbnN0YWxsYXRpb24uXG4gICAqL1xuICByZWFkeVRvSW5zdGFsbFdlYlZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIb3RDb2RlUHVzaFVwZGF0ZSB7XG4gIC8qKlxuICAgKiBDdXJyZW50IHZlcnNpb24gaW5zdGFsbGVkLlxuICAgKi9cbiAgY3VycmVudFZlcnNpb246IHN0cmluZztcbiAgLyoqXG4gICAqIEF2YWlsYWJsZSB2ZXJzaW9uIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgb25lLlxuICAgKi9cbiAgcmVhZHlUb0luc3RhbGxWZXJzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG90Q29kZVB1c2hSZXF1ZXN0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBVcmwgb2YgdGhlIGNoY3AuanNvbiBjb25maWcgb24gdGhlIHNlcnZlci4gUGx1Z2luIHdpbGwgdXNlIHRoaXMgb25lIGluc3RlYWQgb2YgPGNvbmZpZy1maWxlIHVybD1cIlwiPiBmcm9tIHRoZSBjb25maWcueG1sLlxuICAgKi9cbiAgXCJjb25maWctZmlsZVwiPzogc3RyaW5nO1xuICAvKipcbiAgICogQWRkaXRpb25hbCBIVFRQIGhlYWRlcnMsIHRoYXQgd2lsbCBiZSBhZGRlZCB0byBhbGwgcmVxdWVzdHMgaW4gdXBkYXRlIGRvd25sb2FkIHByb2Nlc3MsIGluY2x1ZGluZyBsb2FkaW5nIGNvbmZpZ3MgYW5kIG5ldy9jaGFuZ2VkIGZpbGVzLlxuICAgKi9cbiAgXCJyZXF1ZXN0LWhlYWRlcnNcIj86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbi8qKlxuICogRm9yIGRlc2NyaXB0aW9uIG9uIGVycm9yIGNvZGVzLCBwbGVhc2UgdmlzaXQgaHR0cHM6Ly9naXRodWIuY29tL25vcmRuZXQvY29yZG92YS1ob3QtY29kZS1wdXNoL3dpa2kvRXJyb3ItY29kZXNcbiAqL1xuZXhwb3J0IGVudW0gRXJyb3JDb2RlIHtcbiAgTk9USElOR19UT19JTlNUQUxMID0gMSxcbiAgTk9USElOR19UT19VUERBVEUgPSAyLFxuICBGQUlMRURfVE9fRE9XTkxPQURfQVBQTElDQVRJT05fQ09ORklHID0gLTEsXG4gIEFQUExJQ0FUSU9OX0JVSUxEX1ZFUlNJT05fVE9PX0xPVyA9IC0yLFxuICBGQUlMRURfVE9fRE9XTkxPQURfQ09OVEVOVF9NQU5JRkVTVCA9IC0zLFxuICBGQUlMRURfVE9fRE9XTkxPQURfVVBEQVRFX0ZJTEVTID0gLTQsXG4gIEZBSUxFRF9UT19NT1ZFX0xPQURFRF9GSUxFU19UT19JTlNUQUxMQVRJT05fRk9MREVSID0gLTUsXG4gIFVQREFURV9JU19JTlZBTElEID0gLTYsXG4gIEZBSUxFRF9UT19DT1BZX0ZJTEVTX0ZST01fUFJFVklPVVNfUkVMRUFTRSA9IC03LFxuICBGQUlMRURfVE9fQ09QWV9ORVdfQ09OVEVOVF9GSUxFUyA9IC04LFxuICBMT0NBTF9WRVJTSU9OX09GX0FQUExJQ0FUSU9OX0NPTkZJR19OT1RfRk9VTkQgPSAtOSxcbiAgTE9DQUxfVkVSU0lPTl9PRl9NQU5JRkVTVF9OT1RfRk9VTkQgPSAtMTAsXG4gIExPQURFRF9WRVJTSU9OX09GX0FQUExJQ0FUSU9OX0NPTkZJR19OT1RfRk9VTkQgPSAtMTEsXG4gIExPQURFRF9WRVJTSU9OX09GX01BTklGRVNUX05PVF9GT1VORCA9IC0xMixcbiAgRkFJTEVEX1RPX0lOU1RBTExfQVNTRVRTX09OX0VYVEVSTkFMX1NUT1JBR0UgPSAtMTMsXG4gIENBTlRfSU5TVEFMTF9XSElMRV9ET1dOTE9BRF9JTl9QUk9HUkVTUyA9IC0xNCxcbiAgQ0FOVF9ET1dOTE9BRF9VUERBVEVfV0hJTEVfSU5TVEFMTEFUSU9OX0lOX1BST0dSRVNTID0gLTE1LFxuICBJTlNUQUxMQVRJT05fQUxSRUFEWV9JTl9QUk9HUkVTUyA9IC0xNixcbiAgRE9XTkxPQURfQUxSRUFEWV9JTl9QUk9HUkVTUyA9IC0xNyxcbiAgQVNTRVRTX0ZPTERFUl9JU19OT1RfWUVUX0lOU1RBTExFRCA9IC0xOCxcbiAgTkVXX0FQUExJQ0FUSU9OX0NPTkZJR19JU19JTlZBTElEID0gLTE5XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG90Q29kZVB1c2hFcnJvciB7XG4gIGNvZGU6IEVycm9yQ29kZTtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIb3RDb2RlUHVzaEV2ZW50RGF0YSB7XG4gIGRldGFpbHM/OiB7XG4gICAgZXJyb3I/OiBIb3RDb2RlUHVzaEVycm9yO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIEhvdCBDb2RlIFB1c2hcbiAqIEBkZXNjcmlwdGlvblxuICogSG90Q29kZVB1c2ggcGx1Z2luIGZvciBDb3Jkb3ZhIHRoYXQgc3VwcG9ydHMgaU9TIGFuZCBBbmRyb2lkLiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIGtlZXAgeW91ciBodG1sLCBjc3MgYW5kIGpzIGZpbGVzIHN5bmNlZCB3aXRoIHlvdXIgc2VydmVyLlxuICpcbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIGRldGFpbGVkIHdpa2kgaHR0cHM6Ly9naXRodWIuY29tL25vcmRuZXQvY29yZG92YS1ob3QtY29kZS1wdXNoL3dpa2lcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEhvdENvZGVQdXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9ob3QtY29kZS1wdXNoL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBob3RDb2RlUHVzaDogSG90Q29kZVB1c2gpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGhvdENvZGVQdXNoLmZldGNoVXBkYXRlKG9wdGlvbnMpLnRoZW4oZGF0YSA9PiB7IGNvbnNvbGUubG9nKCdVcGRhdGUgYXZhaWxhYmxlJyk7IH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogXCJIb3RDb2RlUHVzaFwiLFxuICBwbHVnaW46IFwiY29yZG92YS1ob3QtY29kZS1wdXNoXCIsXG4gIHBsdWdpblJlZjogXCJjaGNwXCIsXG4gIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2Ftb3NiYWJ5L2NvcmRvdmEtaG90LWNvZGUtcHVzaC5naXRcIixcbiAgcGxhdGZvcm1zOiBbXCJBbmRyb2lkXCIsIFwiaU9TXCJdXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhvdENvZGVQdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hvdyBkaWFsb2cgd2l0aCB0aGUgcmVxdWVzdCB0byB1cGRhdGUgYXBwbGljYXRpb24gdGhyb3VnaCB0aGUgU3RvcmUgKEFwcCBTdG9yZSBvciBHb29nbGUgUGxheSkuXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2UgdG8gc2hvdyBpbiB0aGUgZGlhbG9nXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHdoZW4gdGhlIHVzZXIgaXMgcmVkaXJlY3RlZCB0byB0aGUgc3RvcmUsIHJlamVjdHMgaWYgdGhlIHVzZXIgZGVjbGluZXMuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RBcHBsaWNhdGlvblVwZGF0ZShtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb3dubG9hZCB1cGRhdGVzIGZyb20gdGhlIHNlcnZlci1zaWRlLlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SG90Q29kZVB1c2hSZXF1ZXN0T3B0aW9uc30gQWRkaXRpb25hbCBvcHRpb25zIHRvIHRoZSByZXF1ZXN0LiBJZiBub3Qgc2V0IC0gcHJlZmVyZW5jZXMgZnJvbSBjb25maWcueG1sIGFyZSB1c2VkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiB0aGVyZSBpcyBhbiB1cGRhdGUgYXZhaWxhYmxlLCByZWplY3RzIG90aGVyd2lzZS5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBmZXRjaFVwZGF0ZShvcHRpb25zPzogSG90Q29kZVB1c2hSZXF1ZXN0T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgSG90Q29kZVB1c2guZ2V0UGx1Z2luKCkuZmV0Y2hVcGRhdGUoXG4gICAgICAgIChlcnJvcjogSG90Q29kZVB1c2hFcnJvciwgZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnN0YWxsIHVwZGF0ZSBpZiB0aGVyZSBpcyBhbnl0aGluZyB0byBpbnN0YWxsLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyB3aGVuIHRoZSB1cGRhdGUgaXMgaW5zdGFsbGVkLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6IFwibm9kZVwiXG4gIH0pXG4gIGluc3RhbGxVcGRhdGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdXBkYXRlIHdhcyBsb2FkZWQgYW5kIHJlYWR5IHRvIGJlIGluc3RhbGxlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8SG90Q29kZVB1c2hVcGRhdGU+fSBSZXNvbHZlcyBpZiBhbiB1cGRhdGUgaXMgcmVhZHksIHJlamVjdHMgaWYgdGhlcmUgaXMgbm8gdXBkYXRlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6IFwibm9kZVwiXG4gIH0pXG4gIGlzVXBkYXRlQXZhaWxhYmxlRm9ySW5zdGFsbGF0aW9uKCk6IFByb21pc2U8SG90Q29kZVB1c2hVcGRhdGU+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYXBwJ3MgdmVyc2lvbnMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhvdENvZGVQdXNoVmVyc2lvbj59IFJlc29sdmVzIHdpdGggdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSB2ZXJzaW9ucy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiBcIm5vZGVcIlxuICB9KVxuICBnZXRWZXJzaW9uSW5mbygpOiBQcm9taXNlPEhvdENvZGVQdXNoVmVyc2lvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gbmV3IHJlbGVhc2Ugd2FzIHN1Y2Nlc3NmdWxseSBsb2FkZWQgYW5kIHJlYWR5IHRvIGJlIGluc3RhbGxlZC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBlbGVtZW50OiBcImRvY3VtZW50XCIsXG4gICAgZXZlbnQ6IFwiY2hjcF91cGRhdGVJc1JlYWR5VG9JbnN0YWxsXCJcbiAgfSlcbiAgb25VcGRhdGVJc1JlYWR5VG9JbnN0YWxsKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIHBsdWdpbiBjb3VsZG4ndCBsb2FkIHVwZGF0ZSBmcm9tIHRoZSBzZXJ2ZXIuIEVycm9yIGRldGFpbHMgYXJlIGF0dGFjaGVkIHRvIHRoZSBldmVudC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBlbGVtZW50OiBcImRvY3VtZW50XCIsXG4gICAgZXZlbnQ6IFwiY2hjcF91cGRhdGVMb2FkRmFpbGVkXCJcbiAgfSlcbiAgb25VcGRhdGVMb2FkRmFpbGVkKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIHdlIHN1Y2Nlc3NmdWxseSBsb2FkZWQgYXBwbGljYXRpb24gY29uZmlnIGZyb20gdGhlIHNlcnZlciwgYnV0IHRoZXJlIGlzIG5vdGhpbmcgbmV3IGlzIGF2YWlsYWJsZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBlbGVtZW50OiBcImRvY3VtZW50XCIsXG4gICAgZXZlbnQ6IFwiY2hjcF9ub3RoaW5nVG9VcGRhdGVcIlxuICB9KVxuICBvbk5vdGhpbmdUb1VwZGF0ZSgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBhbiB1cGRhdGUgaXMgYWJvdXQgdG8gYmUgaW5zdGFsbGVkLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGVsZW1lbnQ6IFwiZG9jdW1lbnRcIixcbiAgICBldmVudDogXCJjaGNwX2JlZm9yZUluc3RhbGxcIlxuICB9KVxuICBvbkJlZm9yZUluc3RhbGwoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gdXBkYXRlIHdhcyBzdWNjZXNzZnVsbHkgaW5zdGFsbGVkLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGVsZW1lbnQ6IFwiZG9jdW1lbnRcIixcbiAgICBldmVudDogXCJjaGNwX3VwZGF0ZUluc3RhbGxlZFwiXG4gIH0pXG4gIG9uVXBkYXRlSW5zdGFsbGVkKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIHVwZGF0ZSBpbnN0YWxsYXRpb24gZmFpbGVkLiBFcnJvciBkZXRhaWxzIGFyZSBhdHRhY2hlZCB0byB0aGUgZXZlbnQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZWxlbWVudDogXCJkb2N1bWVudFwiLFxuICAgIGV2ZW50OiBcImNoY3BfdXBkYXRlSW5zdGFsbEZhaWxlZFwiXG4gIH0pXG4gIG9uVXBkYXRlSW5zdGFsbEZhaWxlZCgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiB0aGVyZSBpcyBub3RoaW5nIHRvIGluc3RhbGwuIFByb2JhYmx5LCBub3RoaW5nIHdhcyBsb2FkZWQgYmVmb3JlIHRoYXQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZWxlbWVudDogXCJkb2N1bWVudFwiLFxuICAgIGV2ZW50OiBcImNoY3Bfbm90aGluZ1RvSW5zdGFsbFwiXG4gIH0pXG4gIG9uTm90aGluZ1RvSW5zdGFsbCgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBwbHVnaW4gaXMgYWJvdXQgdG8gc3RhcnQgaW5zdGFsbGluZyBidW5kbGUgY29udGVudCBvbiB0aGUgZXh0ZXJuYWwgc3RvcmFnZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBlbGVtZW50OiBcImRvY3VtZW50XCIsXG4gICAgZXZlbnQ6IFwiY2hjcF9iZWZvcmVBc3NldHNJbnN0YWxsZWRPbkV4dGVybmFsU3RvcmFnZVwiXG4gIH0pXG4gIG9uQmVmb3JlQXNzZXRzSW5zdGFsbGVkT25FeHRlcm5hbFN0b3JhZ2UoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gcGx1Z2luIHN1Y2Nlc3NmdWxseSBjb3BpZWQgd2ViIHByb2plY3QgZmlsZXMgZnJvbSBidW5kbGUgb24gdGhlIGV4dGVybmFsIHN0b3JhZ2UuIE1vc3QgbGlrZWx5IHlvdSB3aWxsIHVzZSBpdCBmb3IgZGVidWcgcHVycG9zZSBvbmx5LiBPciBldmVuIG5ldmVyLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGVsZW1lbnQ6IFwiZG9jdW1lbnRcIixcbiAgICBldmVudDogXCJjaGNwX2Fzc2V0c0luc3RhbGxlZE9uRXh0ZXJuYWxTdG9yYWdlXCJcbiAgfSlcbiAgb25Bc3NldHNJbnN0YWxsZWRPbkV4dGVybmFsU3RvcmFnZSgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBwbHVnaW4gY291bGRuJ3QgY29weSBmaWxlcyBmcm9tIGJ1bmRsZSBvbiB0aGUgZXh0ZXJuYWwgc3RvcmFnZS4gSWYgdGhpcyBoYXBwZW5zIC0gcGx1Z2luIHdvbid0IHdvcmsuIENhbiBvY2N1ciB3aGVuIHRoZXJlIGlzIG5vdCBlbm91Z2ggZnJlZSBzcGFjZSBvbiB0aGUgZGV2aWNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGVsZW1lbnQ6IFwiZG9jdW1lbnRcIixcbiAgICBldmVudDogXCJjaGNwX2Fzc2V0c0luc3RhbGxhdGlvbkVycm9yXCJcbiAgfSlcbiAgb25Bc3NldHNJbnN0YWxsYXRpb25FcnJvcigpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBwbHVnaW4gY291bGRuJ3QgY29weSBmaWxlcyBmcm9tIGJ1bmRsZSBvbiB0aGUgZXh0ZXJuYWwgc3RvcmFnZS4gSWYgdGhpcyBoYXBwZW5zIC0gcGx1Z2luIHdvbid0IHdvcmsuIENhbiBvY2N1ciB3aGVuIHRoZXJlIGlzIG5vdCBlbm91Z2ggZnJlZSBzcGFjZSBvbiB0aGUgZGV2aWNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGVsZW1lbnQ6IFwiZG9jdW1lbnRcIixcbiAgICBldmVudDogXCJjaGNwX2Rvd25sb2FkUHJvZ3Jlc3NcIlxuICB9KVxuICBkb3dubG9hZFByb2dyZXNzKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hEb3duUHJvZ3Jlc3M+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
