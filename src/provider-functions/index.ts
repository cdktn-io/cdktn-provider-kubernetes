/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from provider function schema

import * as cdktn from 'cdktn';

/**
* Provider-defined functions of the kubernetes provider.
*/
export class KubernetesProviderFunctions {
  private readonly providerLocalName: string;

  /**
  * @param providerLocalName The local name of the provider in required_providers; defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.
  */
  constructor(providerLocalName: string) {
    this.providerLocalName = providerLocalName;
  }

  /**
  * Given a YAML text containing a Kubernetes manifest, will decode and return an object representation of that resource.
  * @param {string} manifest - The YAML text for a Kubernetes manifest
  * @returns {any}
  */
  public manifestDecode(manifest: string): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "manifest_decode", [manifest]);
  }

  /**
  * Given a YAML text containing a Kubernetes manifest with multiple resources, will decode the manifest and return a tuple of object representations for each resource.
  * @param {string} manifest - The YAML plaintext for a Kubernetes manifest
  * @returns {any}
  */
  public manifestDecodeMulti(manifest: string): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "manifest_decode_multi", [manifest]);
  }

  /**
  * Given an object representation of a Kubernetes manifest, will encode and return a YAML string for that resource.
  * @param {any} manifest - The object representation of a Kubernetes manifest
  * @returns {string}
  */
  public manifestEncode(manifest: any): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "manifest_encode", [manifest]));
  }
}
