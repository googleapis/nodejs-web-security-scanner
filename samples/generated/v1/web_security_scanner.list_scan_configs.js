// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main() {
  // [START websecurityscanner_list_scan_configs_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource name, which should be a project resource name in the
   *  format 'projects/{projectId}'.
   */
  // const parent = 'abc123'
  /**
   *  A token identifying a page of results to be returned. This should be a
   *  `next_page_token` value returned from a previous List request.
   *  If unspecified, the first page of results is returned.
   */
  // const pageToken = 'abc123'
  /**
   *  The maximum number of ScanConfigs to return, can be limited by server.
   *  If not specified or not positive, the implementation will select a
   *  reasonable value.
   */
  // const pageSize = 1234

  // Imports the Websecurityscanner library
  const {WebSecurityScannerClient} =
    require('@google-cloud/web-security-scanner').v1;

  // Instantiates a client
  const websecurityscannerClient = new WebSecurityScannerClient();

  async function listScanConfigs() {
    // Construct request
    const request = {};

    // Run request
    const iterable = await websecurityscannerClient.listScanConfigsAsync(
      request
    );
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listScanConfigs();
  // [END websecurityscanner_list_scan_configs_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
