// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main() {
  // [START websecurityscanner_v1_generated_WebSecurityScanner_StopScanRun_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the ScanRun to be stopped. The name follows the
   *  format of
   *  'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
   */
  // const name = 'abc123'

  // Imports the Websecurityscanner library
  const {WebSecurityScannerClient} = require('@google-cloud/web-security-scanner').v1;

  // Instantiates a client
  const websecurityscannerClient = new WebSecurityScannerClient();

  async function callStopScanRun() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await websecurityscannerClient.stopScanRun(request);
    console.log(response);
  }

  callStopScanRun();
  // [END websecurityscanner_v1_generated_WebSecurityScanner_StopScanRun_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
