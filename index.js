var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
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
var HotCodePushOriginal = /** @class */ (function(_super) {
  __extends(HotCodePushOriginal, _super)
  function HotCodePushOriginal() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  HotCodePushOriginal.prototype.requestApplicationUpdate = function(message) {
    return cordova(this, "requestApplicationUpdate", {}, arguments)
  }
  HotCodePushOriginal.prototype.fetchUpdate = function(options) {
    var _this = this
    return (function() {
      if (checkAvailability(_this) === true) {
        return new Promise(function(resolve, reject) {
          HotCodePushOriginal.getPlugin().fetchUpdate(function(error, data) {
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
  HotCodePushOriginal.prototype.installUpdate = function(options) {
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
  HotCodePushOriginal.prototype.isUpdateAvailableForInstallation = function() {
    return cordova(
      this,
      "isUpdateAvailableForInstallation",
      { callbackStyle: "node" },
      arguments
    )
  }
  HotCodePushOriginal.prototype.getVersionInfo = function() {
    return cordova(this, "getVersionInfo", { callbackStyle: "node" }, arguments)
  }
  HotCodePushOriginal.prototype.onUpdateIsReadyToInstall = function() {
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
  HotCodePushOriginal.prototype.onUpdateLoadFailed = function() {
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
  HotCodePushOriginal.prototype.onNothingToUpdate = function() {
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
  HotCodePushOriginal.prototype.onBeforeInstall = function() {
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
  HotCodePushOriginal.prototype.onUpdateInstalled = function() {
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
  HotCodePushOriginal.prototype.onUpdateInstallFailed = function() {
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
  HotCodePushOriginal.prototype.onNothingToInstall = function() {
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
  HotCodePushOriginal.prototype.onBeforeAssetsInstalledOnExternalStorage = function() {
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
  HotCodePushOriginal.prototype.onAssetsInstalledOnExternalStorage = function() {
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
  HotCodePushOriginal.prototype.onAssetsInstallationError = function() {
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
  HotCodePushOriginal.prototype.downloadProgress = function() {
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
  HotCodePushOriginal.pluginName = "HotCodePush"
  HotCodePushOriginal.plugin = "cordova-hot-code-push"
  HotCodePushOriginal.pluginRef = "chcp"
  HotCodePushOriginal.repo =
    "https://github.com/amosbaby/cordova-hot-code-push.git"
  HotCodePushOriginal.platforms = ["Android", "iOS"]
  return HotCodePushOriginal
})(IonicNativePlugin)
var HotCodePush = new HotCodePushOriginal()
export { HotCodePush }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RlaC1ob3QtY29kZS1wdXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLGlEQUtOLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQW9EbEM7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxTQXNCWDtBQXRCRCxXQUFZLFNBQVM7SUFDbkIscUVBQXNCLENBQUE7SUFDdEIsbUVBQXFCLENBQUE7SUFDckIsNEdBQTBDLENBQUE7SUFDMUMsb0dBQXNDLENBQUE7SUFDdEMsd0dBQXdDLENBQUE7SUFDeEMsZ0dBQW9DLENBQUE7SUFDcEMsc0lBQXVELENBQUE7SUFDdkQsb0VBQXNCLENBQUE7SUFDdEIsc0hBQStDLENBQUE7SUFDL0Msa0dBQXFDLENBQUE7SUFDckMsNEhBQWtELENBQUE7SUFDbEQseUdBQXlDLENBQUE7SUFDekMsK0hBQW9ELENBQUE7SUFDcEQsMkdBQTBDLENBQUE7SUFDMUMsMkhBQWtELENBQUE7SUFDbEQsaUhBQTZDLENBQUE7SUFDN0MseUlBQXlELENBQUE7SUFDekQsbUdBQXNDLENBQUE7SUFDdEMsMkZBQWtDLENBQUE7SUFDbEMsdUdBQXdDLENBQUE7SUFDeEMscUdBQXVDLENBQUE7QUFDekMsQ0FBQyxFQXRCVyxTQUFTLEtBQVQsU0FBUyxRQXNCcEI7O0lBd0NnQywrQkFBaUI7Ozs7SUFPaEQsOENBQXdCLGFBQUMsT0FBZTtJQVV4QyxpQ0FBVyxhQUFDLE9BQW1DOzs7bURBQWdCO2dCQUM3RCxPQUFPLElBQUksT0FBTyxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQ3RDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQ2pDLFVBQUMsS0FBdUIsRUFBRSxJQUFTO3dCQUNqQyxJQUFJLEtBQUssRUFBRTs0QkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2Y7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNmO29CQUNILENBQUMsRUFDRCxPQUFPLENBQ1IsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFTRCxtQ0FBYTtJQVdiLHNEQUFnQztJQVdoQyxvQ0FBYztJQWFkLDhDQUF3QjtJQWF4Qix3Q0FBa0I7SUFhbEIsdUNBQWlCO0lBYWpCLHFDQUFlO0lBYWYsdUNBQWlCO0lBYWpCLDJDQUFxQjtJQWFyQix3Q0FBa0I7SUFhbEIsOERBQXdDO0lBYXhDLHdEQUFrQztJQWFsQywrQ0FBeUI7SUFhekIsc0NBQWdCOzs7Ozs7c0JBeFVsQjtFQTRIaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIENvcmRvdmEsXG4gIENvcmRvdmFDaGVjayxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpblxufSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuZGVjbGFyZSB2YXIgY2hjcDogYW55O1xuZXhwb3J0IGludGVyZmFjZSBIb3RDb2RlUHVzaERvd25Qcm9ncmVzcyB7XG4gIGN1cnJlbnQ6IG51bWJlcjtcbiAgdG90YWw6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSG90Q29kZVB1c2hWZXJzaW9uIHtcbiAgLyoqXG4gICAqIEFwcGxpY2F0aW9uJ3MgdmVyc2lvbiBuYW1lLiBUaGlzIHZlcnNpb24gaXMgdmlzaWJsZSB0byB0aGUgdXNlciBvbiB0aGUgc3RvcmVzLlxuICAgKi9cbiAgYXBwVmVyc2lvbjogc3RyaW5nO1xuICAvKipcbiAgICogQXBwbGljYXRpb24ncyBidWlsZCB2ZXJzaW9uIG51bWJlci5cbiAgICovXG4gIGJ1aWxkVmVyc2lvbjogc3RyaW5nO1xuICAvKipcbiAgICogVmVyc2lvbiBvZiB0aGUgd2ViIGNvbnRlbnQsIHRoYXQgaXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyLiBCYXNpY2FsbHksIHZhbHVlIG9mIHRoZSByZWxlYXNlIHByb3BlcnR5IGZyb20gY2hjcC5qc29uIGZpbGUgaW4geW91ciBsb2NhbCB3d3cgZm9sZGVyLlxuICAgKi9cbiAgY3VycmVudFdlYlZlcnNpb246IHN0cmluZztcbiAgLyoqXG4gICAqIFByZXZpb3VzIHdlYiBjb250ZW50IHZlcnNpb24uIFRoaXMgaXMgYSB2ZXJzaW9uIG9mIG91ciBiYWNrdXAuIENhbiBiZSBlbXB0eSwgaWYgdGhlcmUgd2VyZSBubyB1cGRhdGVzIGluc3RhbGxlZC5cbiAgICovXG4gIHByZXZpb3VzV2ViVmVyc2lvbjogc3RyaW5nO1xuICAvKipcbiAgICogVmVyc2lvbiBudW1iZXIgb2YgdGhlIHdlYiBjb250ZW50LCB0aGF0IHdhcyBsb2FkZWQgYnkgdGhlIHBsdWdpbiBhbmQgcmVhZHkgdG8gYmUgaW5zdGFsbGVkLiBCYXNpY2FsbHksIHZhbHVlIG9mIHRoZSByZWxlYXNlIHByb3BlcnR5IGZyb20gY2hjcC5qc29uIGZpbGUgb24geW91ciBzZXJ2ZXIuIENhbiBiZSBlbXB0eSwgaWYgbm8gdXBkYXRlIGlzIHdhaXRpbmcgZm9yIGluc3RhbGxhdGlvbi5cbiAgICovXG4gIHJlYWR5VG9JbnN0YWxsV2ViVmVyc2lvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhvdENvZGVQdXNoVXBkYXRlIHtcbiAgLyoqXG4gICAqIEN1cnJlbnQgdmVyc2lvbiBpbnN0YWxsZWQuXG4gICAqL1xuICBjdXJyZW50VmVyc2lvbjogc3RyaW5nO1xuICAvKipcbiAgICogQXZhaWxhYmxlIHZlcnNpb24gdG8gcmVwbGFjZSB0aGUgY3VycmVudCBvbmUuXG4gICAqL1xuICByZWFkeVRvSW5zdGFsbFZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIb3RDb2RlUHVzaFJlcXVlc3RPcHRpb25zIHtcbiAgLyoqXG4gICAqIFVybCBvZiB0aGUgY2hjcC5qc29uIGNvbmZpZyBvbiB0aGUgc2VydmVyLiBQbHVnaW4gd2lsbCB1c2UgdGhpcyBvbmUgaW5zdGVhZCBvZiA8Y29uZmlnLWZpbGUgdXJsPVwiXCI+IGZyb20gdGhlIGNvbmZpZy54bWwuXG4gICAqL1xuICBcImNvbmZpZy1maWxlXCI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIEhUVFAgaGVhZGVycywgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIGFsbCByZXF1ZXN0cyBpbiB1cGRhdGUgZG93bmxvYWQgcHJvY2VzcywgaW5jbHVkaW5nIGxvYWRpbmcgY29uZmlncyBhbmQgbmV3L2NoYW5nZWQgZmlsZXMuXG4gICAqL1xuICBcInJlcXVlc3QtaGVhZGVyc1wiPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuLyoqXG4gKiBGb3IgZGVzY3JpcHRpb24gb24gZXJyb3IgY29kZXMsIHBsZWFzZSB2aXNpdCBodHRwczovL2dpdGh1Yi5jb20vbm9yZG5ldC9jb3Jkb3ZhLWhvdC1jb2RlLXB1c2gvd2lraS9FcnJvci1jb2Rlc1xuICovXG5leHBvcnQgZW51bSBFcnJvckNvZGUge1xuICBOT1RISU5HX1RPX0lOU1RBTEwgPSAxLFxuICBOT1RISU5HX1RPX1VQREFURSA9IDIsXG4gIEZBSUxFRF9UT19ET1dOTE9BRF9BUFBMSUNBVElPTl9DT05GSUcgPSAtMSxcbiAgQVBQTElDQVRJT05fQlVJTERfVkVSU0lPTl9UT09fTE9XID0gLTIsXG4gIEZBSUxFRF9UT19ET1dOTE9BRF9DT05URU5UX01BTklGRVNUID0gLTMsXG4gIEZBSUxFRF9UT19ET1dOTE9BRF9VUERBVEVfRklMRVMgPSAtNCxcbiAgRkFJTEVEX1RPX01PVkVfTE9BREVEX0ZJTEVTX1RPX0lOU1RBTExBVElPTl9GT0xERVIgPSAtNSxcbiAgVVBEQVRFX0lTX0lOVkFMSUQgPSAtNixcbiAgRkFJTEVEX1RPX0NPUFlfRklMRVNfRlJPTV9QUkVWSU9VU19SRUxFQVNFID0gLTcsXG4gIEZBSUxFRF9UT19DT1BZX05FV19DT05URU5UX0ZJTEVTID0gLTgsXG4gIExPQ0FMX1ZFUlNJT05fT0ZfQVBQTElDQVRJT05fQ09ORklHX05PVF9GT1VORCA9IC05LFxuICBMT0NBTF9WRVJTSU9OX09GX01BTklGRVNUX05PVF9GT1VORCA9IC0xMCxcbiAgTE9BREVEX1ZFUlNJT05fT0ZfQVBQTElDQVRJT05fQ09ORklHX05PVF9GT1VORCA9IC0xMSxcbiAgTE9BREVEX1ZFUlNJT05fT0ZfTUFOSUZFU1RfTk9UX0ZPVU5EID0gLTEyLFxuICBGQUlMRURfVE9fSU5TVEFMTF9BU1NFVFNfT05fRVhURVJOQUxfU1RPUkFHRSA9IC0xMyxcbiAgQ0FOVF9JTlNUQUxMX1dISUxFX0RPV05MT0FEX0lOX1BST0dSRVNTID0gLTE0LFxuICBDQU5UX0RPV05MT0FEX1VQREFURV9XSElMRV9JTlNUQUxMQVRJT05fSU5fUFJPR1JFU1MgPSAtMTUsXG4gIElOU1RBTExBVElPTl9BTFJFQURZX0lOX1BST0dSRVNTID0gLTE2LFxuICBET1dOTE9BRF9BTFJFQURZX0lOX1BST0dSRVNTID0gLTE3LFxuICBBU1NFVFNfRk9MREVSX0lTX05PVF9ZRVRfSU5TVEFMTEVEID0gLTE4LFxuICBORVdfQVBQTElDQVRJT05fQ09ORklHX0lTX0lOVkFMSUQgPSAtMTlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIb3RDb2RlUHVzaEVycm9yIHtcbiAgY29kZTogRXJyb3JDb2RlO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhvdENvZGVQdXNoRXZlbnREYXRhIHtcbiAgZGV0YWlscz86IHtcbiAgICBlcnJvcj86IEhvdENvZGVQdXNoRXJyb3I7XG4gIH07XG59XG5cbi8qKlxuICogQG5hbWUgSG90IENvZGUgUHVzaFxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3RDb2RlUHVzaCBwbHVnaW4gZm9yIENvcmRvdmEgdGhhdCBzdXBwb3J0cyBpT1MgYW5kIEFuZHJvaWQuIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8ga2VlcCB5b3VyIGh0bWwsIGNzcyBhbmQganMgZmlsZXMgc3luY2VkIHdpdGggeW91ciBzZXJ2ZXIuXG4gKlxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgZGV0YWlsZWQgd2lraSBodHRwczovL2dpdGh1Yi5jb20vbm9yZG5ldC9jb3Jkb3ZhLWhvdC1jb2RlLXB1c2gvd2lraVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSG90Q29kZVB1c2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2hvdC1jb2RlLXB1c2gvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvdENvZGVQdXNoOiBIb3RDb2RlUHVzaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogaG90Q29kZVB1c2guZmV0Y2hVcGRhdGUob3B0aW9ucykudGhlbihkYXRhID0+IHsgY29uc29sZS5sb2coJ1VwZGF0ZSBhdmFpbGFibGUnKTsgfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiBcIkhvdENvZGVQdXNoXCIsXG4gIHBsdWdpbjogXCJjb3Jkb3ZhLWhvdC1jb2RlLXB1c2hcIixcbiAgcGx1Z2luUmVmOiBcImNoY3BcIixcbiAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vYW1vc2JhYnkvY29yZG92YS1ob3QtY29kZS1wdXNoLmdpdFwiLFxuICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIiwgXCJpT1NcIl1cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSG90Q29kZVB1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaG93IGRpYWxvZyB3aXRoIHRoZSByZXF1ZXN0IHRvIHVwZGF0ZSBhcHBsaWNhdGlvbiB0aHJvdWdoIHRoZSBTdG9yZSAoQXBwIFN0b3JlIG9yIEdvb2dsZSBQbGF5KS5cbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gTWVzc2FnZSB0byBzaG93IGluIHRoZSBkaWFsb2dcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgd2hlbiB0aGUgdXNlciBpcyByZWRpcmVjdGVkIHRvIHRoZSBzdG9yZSwgcmVqZWN0cyBpZiB0aGUgdXNlciBkZWNsaW5lcy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdEFwcGxpY2F0aW9uVXBkYXRlKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERvd25sb2FkIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyLXNpZGUuXG4gICAqIEBwYXJhbSBvcHRpb25zIHtIb3RDb2RlUHVzaFJlcXVlc3RPcHRpb25zfSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gdGhlIHJlcXVlc3QuIElmIG5vdCBzZXQgLSBwcmVmZXJlbmNlcyBmcm9tIGNvbmZpZy54bWwgYXJlIHVzZWQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIGlmIHRoZXJlIGlzIGFuIHVwZGF0ZSBhdmFpbGFibGUsIHJlamVjdHMgb3RoZXJ3aXNlLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGZldGNoVXBkYXRlKG9wdGlvbnM/OiBIb3RDb2RlUHVzaFJlcXVlc3RPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBIb3RDb2RlUHVzaC5nZXRQbHVnaW4oKS5mZXRjaFVwZGF0ZShcbiAgICAgICAgKGVycm9yOiBIb3RDb2RlUHVzaEVycm9yLCBkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc3RhbGwgdXBkYXRlIGlmIHRoZXJlIGlzIGFueXRoaW5nIHRvIGluc3RhbGwuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHdoZW4gdGhlIHVwZGF0ZSBpcyBpbnN0YWxsZWQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogXCJub2RlXCJcbiAgfSlcbiAgaW5zdGFsbFVwZGF0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB1cGRhdGUgd2FzIGxvYWRlZCBhbmQgcmVhZHkgdG8gYmUgaW5zdGFsbGVkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIb3RDb2RlUHVzaFVwZGF0ZT59IFJlc29sdmVzIGlmIGFuIHVwZGF0ZSBpcyByZWFkeSwgcmVqZWN0cyBpZiB0aGVyZSBpcyBubyB1cGRhdGUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogXCJub2RlXCJcbiAgfSlcbiAgaXNVcGRhdGVBdmFpbGFibGVGb3JJbnN0YWxsYXRpb24oKTogUHJvbWlzZTxIb3RDb2RlUHVzaFVwZGF0ZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhcHAncyB2ZXJzaW9ucy5cbiAgICogQHJldHVybnMge1Byb21pc2U8SG90Q29kZVB1c2hWZXJzaW9uPn0gUmVzb2x2ZXMgd2l0aCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHZlcnNpb25zLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6IFwibm9kZVwiXG4gIH0pXG4gIGdldFZlcnNpb25JbmZvKCk6IFByb21pc2U8SG90Q29kZVB1c2hWZXJzaW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBuZXcgcmVsZWFzZSB3YXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCBhbmQgcmVhZHkgdG8gYmUgaW5zdGFsbGVkLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGVsZW1lbnQ6IFwiZG9jdW1lbnRcIixcbiAgICBldmVudDogXCJjaGNwX3VwZGF0ZUlzUmVhZHlUb0luc3RhbGxcIlxuICB9KVxuICBvblVwZGF0ZUlzUmVhZHlUb0luc3RhbGwoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gcGx1Z2luIGNvdWxkbid0IGxvYWQgdXBkYXRlIGZyb20gdGhlIHNlcnZlci4gRXJyb3IgZGV0YWlscyBhcmUgYXR0YWNoZWQgdG8gdGhlIGV2ZW50LlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGVsZW1lbnQ6IFwiZG9jdW1lbnRcIixcbiAgICBldmVudDogXCJjaGNwX3VwZGF0ZUxvYWRGYWlsZWRcIlxuICB9KVxuICBvblVwZGF0ZUxvYWRGYWlsZWQoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gd2Ugc3VjY2Vzc2Z1bGx5IGxvYWRlZCBhcHBsaWNhdGlvbiBjb25maWcgZnJvbSB0aGUgc2VydmVyLCBidXQgdGhlcmUgaXMgbm90aGluZyBuZXcgaXMgYXZhaWxhYmxlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGVsZW1lbnQ6IFwiZG9jdW1lbnRcIixcbiAgICBldmVudDogXCJjaGNwX25vdGhpbmdUb1VwZGF0ZVwiXG4gIH0pXG4gIG9uTm90aGluZ1RvVXBkYXRlKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIGFuIHVwZGF0ZSBpcyBhYm91dCB0byBiZSBpbnN0YWxsZWQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZWxlbWVudDogXCJkb2N1bWVudFwiLFxuICAgIGV2ZW50OiBcImNoY3BfYmVmb3JlSW5zdGFsbFwiXG4gIH0pXG4gIG9uQmVmb3JlSW5zdGFsbCgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiB1cGRhdGUgd2FzIHN1Y2Nlc3NmdWxseSBpbnN0YWxsZWQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZWxlbWVudDogXCJkb2N1bWVudFwiLFxuICAgIGV2ZW50OiBcImNoY3BfdXBkYXRlSW5zdGFsbGVkXCJcbiAgfSlcbiAgb25VcGRhdGVJbnN0YWxsZWQoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gdXBkYXRlIGluc3RhbGxhdGlvbiBmYWlsZWQuIEVycm9yIGRldGFpbHMgYXJlIGF0dGFjaGVkIHRvIHRoZSBldmVudC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBlbGVtZW50OiBcImRvY3VtZW50XCIsXG4gICAgZXZlbnQ6IFwiY2hjcF91cGRhdGVJbnN0YWxsRmFpbGVkXCJcbiAgfSlcbiAgb25VcGRhdGVJbnN0YWxsRmFpbGVkKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIHRoZXJlIGlzIG5vdGhpbmcgdG8gaW5zdGFsbC4gUHJvYmFibHksIG5vdGhpbmcgd2FzIGxvYWRlZCBiZWZvcmUgdGhhdC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBlbGVtZW50OiBcImRvY3VtZW50XCIsXG4gICAgZXZlbnQ6IFwiY2hjcF9ub3RoaW5nVG9JbnN0YWxsXCJcbiAgfSlcbiAgb25Ob3RoaW5nVG9JbnN0YWxsKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIHBsdWdpbiBpcyBhYm91dCB0byBzdGFydCBpbnN0YWxsaW5nIGJ1bmRsZSBjb250ZW50IG9uIHRoZSBleHRlcm5hbCBzdG9yYWdlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGVsZW1lbnQ6IFwiZG9jdW1lbnRcIixcbiAgICBldmVudDogXCJjaGNwX2JlZm9yZUFzc2V0c0luc3RhbGxlZE9uRXh0ZXJuYWxTdG9yYWdlXCJcbiAgfSlcbiAgb25CZWZvcmVBc3NldHNJbnN0YWxsZWRPbkV4dGVybmFsU3RvcmFnZSgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBwbHVnaW4gc3VjY2Vzc2Z1bGx5IGNvcGllZCB3ZWIgcHJvamVjdCBmaWxlcyBmcm9tIGJ1bmRsZSBvbiB0aGUgZXh0ZXJuYWwgc3RvcmFnZS4gTW9zdCBsaWtlbHkgeW91IHdpbGwgdXNlIGl0IGZvciBkZWJ1ZyBwdXJwb3NlIG9ubHkuIE9yIGV2ZW4gbmV2ZXIuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZWxlbWVudDogXCJkb2N1bWVudFwiLFxuICAgIGV2ZW50OiBcImNoY3BfYXNzZXRzSW5zdGFsbGVkT25FeHRlcm5hbFN0b3JhZ2VcIlxuICB9KVxuICBvbkFzc2V0c0luc3RhbGxlZE9uRXh0ZXJuYWxTdG9yYWdlKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIHBsdWdpbiBjb3VsZG4ndCBjb3B5IGZpbGVzIGZyb20gYnVuZGxlIG9uIHRoZSBleHRlcm5hbCBzdG9yYWdlLiBJZiB0aGlzIGhhcHBlbnMgLSBwbHVnaW4gd29uJ3Qgd29yay4gQ2FuIG9jY3VyIHdoZW4gdGhlcmUgaXMgbm90IGVub3VnaCBmcmVlIHNwYWNlIG9uIHRoZSBkZXZpY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZWxlbWVudDogXCJkb2N1bWVudFwiLFxuICAgIGV2ZW50OiBcImNoY3BfYXNzZXRzSW5zdGFsbGF0aW9uRXJyb3JcIlxuICB9KVxuICBvbkFzc2V0c0luc3RhbGxhdGlvbkVycm9yKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIHBsdWdpbiBjb3VsZG4ndCBjb3B5IGZpbGVzIGZyb20gYnVuZGxlIG9uIHRoZSBleHRlcm5hbCBzdG9yYWdlLiBJZiB0aGlzIGhhcHBlbnMgLSBwbHVnaW4gd29uJ3Qgd29yay4gQ2FuIG9jY3VyIHdoZW4gdGhlcmUgaXMgbm90IGVub3VnaCBmcmVlIHNwYWNlIG9uIHRoZSBkZXZpY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZWxlbWVudDogXCJkb2N1bWVudFwiLFxuICAgIGV2ZW50OiBcImNoY3BfZG93bmxvYWRQcm9ncmVzc1wiXG4gIH0pXG4gIGRvd25sb2FkUHJvZ3Jlc3MoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaERvd25Qcm9ncmVzcz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
