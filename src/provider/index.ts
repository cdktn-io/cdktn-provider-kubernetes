/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KubernetesProviderConfig {
  /**
  * PEM-encoded client certificate for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#client_certificate KubernetesProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded client certificate key for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#client_key KubernetesProvider#client_key}
  */
  readonly clientKey?: string;
  /**
  * PEM-encoded root certificates bundle for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#cluster_ca_certificate KubernetesProvider#cluster_ca_certificate}
  */
  readonly clusterCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#config_context KubernetesProvider#config_context}
  */
  readonly configContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#config_context_auth_info KubernetesProvider#config_context_auth_info}
  */
  readonly configContextAuthInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#config_context_cluster KubernetesProvider#config_context_cluster}
  */
  readonly configContextCluster?: string;
  /**
  * Path to the kube config file. Can be set with KUBE_CONFIG_PATH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#config_path KubernetesProvider#config_path}
  */
  readonly configPath?: string;
  /**
  * A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#config_paths KubernetesProvider#config_paths}
  */
  readonly configPaths?: string[];
  /**
  * The hostname (in form of URI) of Kubernetes master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#host KubernetesProvider#host}
  */
  readonly host?: string;
  /**
  * List of Kubernetes metadata annotations to ignore across all resources handled by this provider for situations where external systems are managing certain resource annotations. Each item is a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#ignore_annotations KubernetesProvider#ignore_annotations}
  */
  readonly ignoreAnnotations?: string[];
  /**
  * List of Kubernetes metadata labels to ignore across all resources handled by this provider for situations where external systems are managing certain resource labels. Each item is a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#ignore_labels KubernetesProvider#ignore_labels}
  */
  readonly ignoreLabels?: string[];
  /**
  * Whether server should be accessed without verifying the TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#insecure KubernetesProvider#insecure}
  */
  readonly insecure?: boolean | cdktn.IResolvable;
  /**
  * The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#password KubernetesProvider#password}
  */
  readonly password?: string;
  /**
  * URL to the proxy to be used for all API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#proxy_url KubernetesProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Server name passed to the server for SNI and is used in the client to check server certificates against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#tls_server_name KubernetesProvider#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Token to authenticate an service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#token KubernetesProvider#token}
  */
  readonly token?: string;
  /**
  * The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#username KubernetesProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#alias KubernetesProvider#alias}
  */
  readonly alias?: string;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#exec KubernetesProvider#exec}
  */
  readonly exec?: KubernetesProviderExec[] | cdktn.IResolvable;
  /**
  * experiments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#experiments KubernetesProvider#experiments}
  */
  readonly experiments?: KubernetesProviderExperiments[] | cdktn.IResolvable;
}
export interface KubernetesProviderExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#api_version KubernetesProvider#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#args KubernetesProvider#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#command KubernetesProvider#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#env KubernetesProvider#env}
  */
  readonly env?: { [key: string]: string };
}

export function kubernetesProviderExecToTerraform(struct?: KubernetesProviderExec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktn.stringToTerraform(struct!.apiVersion),
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.stringToTerraform(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
  }
}


export function kubernetesProviderExecToHclTerraform(struct?: KubernetesProviderExec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktn.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface KubernetesProviderExperiments {
  /**
  * Enable the `kubernetes_manifest` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#manifest_resource KubernetesProvider#manifest_resource}
  */
  readonly manifestResource?: boolean | cdktn.IResolvable;
}

export function kubernetesProviderExperimentsToTerraform(struct?: KubernetesProviderExperiments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manifest_resource: cdktn.booleanToTerraform(struct!.manifestResource),
  }
}


export function kubernetesProviderExperimentsToHclTerraform(struct?: KubernetesProviderExperiments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manifest_resource: {
      value: cdktn.booleanToHclTerraform(struct!.manifestResource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs kubernetes}
*/
export class KubernetesProvider extends cdktn.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KubernetesProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesProvider to import
  * @param importFromId The id of the existing KubernetesProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "kubernetes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KubernetesProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kubernetes',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.38.0',
        providerVersionConstraint: '~> 2.0'
      },
      terraformProviderSource: 'hashicorp/kubernetes'
    });
    this._clientCertificate = config.clientCertificate;
    this._clientKey = config.clientKey;
    this._clusterCaCertificate = config.clusterCaCertificate;
    this._configContext = config.configContext;
    this._configContextAuthInfo = config.configContextAuthInfo;
    this._configContextCluster = config.configContextCluster;
    this._configPath = config.configPath;
    this._configPaths = config.configPaths;
    this._host = config.host;
    this._ignoreAnnotations = config.ignoreAnnotations;
    this._ignoreLabels = config.ignoreLabels;
    this._insecure = config.insecure;
    this._password = config.password;
    this._proxyUrl = config.proxyUrl;
    this._tlsServerName = config.tlsServerName;
    this._token = config.token;
    this._username = config.username;
    this._alias = config.alias;
    this._exec = config.exec;
    this._experiments = config.experiments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public set clientCertificate(value: string | undefined) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this._clientKey;
  }
  public set clientKey(value: string | undefined) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // cluster_ca_certificate - computed: false, optional: true, required: false
  private _clusterCaCertificate?: string; 
  public get clusterCaCertificate() {
    return this._clusterCaCertificate;
  }
  public set clusterCaCertificate(value: string | undefined) {
    this._clusterCaCertificate = value;
  }
  public resetClusterCaCertificate() {
    this._clusterCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaCertificateInput() {
    return this._clusterCaCertificate;
  }

  // config_context - computed: false, optional: true, required: false
  private _configContext?: string; 
  public get configContext() {
    return this._configContext;
  }
  public set configContext(value: string | undefined) {
    this._configContext = value;
  }
  public resetConfigContext() {
    this._configContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextInput() {
    return this._configContext;
  }

  // config_context_auth_info - computed: false, optional: true, required: false
  private _configContextAuthInfo?: string; 
  public get configContextAuthInfo() {
    return this._configContextAuthInfo;
  }
  public set configContextAuthInfo(value: string | undefined) {
    this._configContextAuthInfo = value;
  }
  public resetConfigContextAuthInfo() {
    this._configContextAuthInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextAuthInfoInput() {
    return this._configContextAuthInfo;
  }

  // config_context_cluster - computed: false, optional: true, required: false
  private _configContextCluster?: string; 
  public get configContextCluster() {
    return this._configContextCluster;
  }
  public set configContextCluster(value: string | undefined) {
    this._configContextCluster = value;
  }
  public resetConfigContextCluster() {
    this._configContextCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextClusterInput() {
    return this._configContextCluster;
  }

  // config_path - computed: false, optional: true, required: false
  private _configPath?: string; 
  public get configPath() {
    return this._configPath;
  }
  public set configPath(value: string | undefined) {
    this._configPath = value;
  }
  public resetConfigPath() {
    this._configPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath;
  }

  // config_paths - computed: false, optional: true, required: false
  private _configPaths?: string[]; 
  public get configPaths() {
    return this._configPaths;
  }
  public set configPaths(value: string[] | undefined) {
    this._configPaths = value;
  }
  public resetConfigPaths() {
    this._configPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathsInput() {
    return this._configPaths;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // ignore_annotations - computed: false, optional: true, required: false
  private _ignoreAnnotations?: string[]; 
  public get ignoreAnnotations() {
    return this._ignoreAnnotations;
  }
  public set ignoreAnnotations(value: string[] | undefined) {
    this._ignoreAnnotations = value;
  }
  public resetIgnoreAnnotations() {
    this._ignoreAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAnnotationsInput() {
    return this._ignoreAnnotations;
  }

  // ignore_labels - computed: false, optional: true, required: false
  private _ignoreLabels?: string[]; 
  public get ignoreLabels() {
    return this._ignoreLabels;
  }
  public set ignoreLabels(value: string[] | undefined) {
    this._ignoreLabels = value;
  }
  public resetIgnoreLabels() {
    this._ignoreLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLabelsInput() {
    return this._ignoreLabels;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktn.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktn.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this._proxyUrl;
  }
  public set proxyUrl(value: string | undefined) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this._tlsServerName;
  }
  public set tlsServerName(value: string | undefined) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: KubernetesProviderExec[] | cdktn.IResolvable; 
  public get exec() {
    return this._exec;
  }
  public set exec(value: KubernetesProviderExec[] | cdktn.IResolvable | undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }

  // experiments - computed: false, optional: true, required: false
  private _experiments?: KubernetesProviderExperiments[] | cdktn.IResolvable; 
  public get experiments() {
    return this._experiments;
  }
  public set experiments(value: KubernetesProviderExperiments[] | cdktn.IResolvable | undefined) {
    this._experiments = value;
  }
  public resetExperiments() {
    this._experiments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentsInput() {
    return this._experiments;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_certificate: cdktn.stringToTerraform(this._clientCertificate),
      client_key: cdktn.stringToTerraform(this._clientKey),
      cluster_ca_certificate: cdktn.stringToTerraform(this._clusterCaCertificate),
      config_context: cdktn.stringToTerraform(this._configContext),
      config_context_auth_info: cdktn.stringToTerraform(this._configContextAuthInfo),
      config_context_cluster: cdktn.stringToTerraform(this._configContextCluster),
      config_path: cdktn.stringToTerraform(this._configPath),
      config_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(this._configPaths),
      host: cdktn.stringToTerraform(this._host),
      ignore_annotations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ignoreAnnotations),
      ignore_labels: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ignoreLabels),
      insecure: cdktn.booleanToTerraform(this._insecure),
      password: cdktn.stringToTerraform(this._password),
      proxy_url: cdktn.stringToTerraform(this._proxyUrl),
      tls_server_name: cdktn.stringToTerraform(this._tlsServerName),
      token: cdktn.stringToTerraform(this._token),
      username: cdktn.stringToTerraform(this._username),
      alias: cdktn.stringToTerraform(this._alias),
      exec: cdktn.listMapper(kubernetesProviderExecToTerraform, true)(this._exec),
      experiments: cdktn.listMapper(kubernetesProviderExperimentsToTerraform, true)(this._experiments),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_certificate: {
        value: cdktn.stringToHclTerraform(this._clientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key: {
        value: cdktn.stringToHclTerraform(this._clientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_ca_certificate: {
        value: cdktn.stringToHclTerraform(this._clusterCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_context: {
        value: cdktn.stringToHclTerraform(this._configContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_context_auth_info: {
        value: cdktn.stringToHclTerraform(this._configContextAuthInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_context_cluster: {
        value: cdktn.stringToHclTerraform(this._configContextCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_path: {
        value: cdktn.stringToHclTerraform(this._configPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_paths: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._configPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      host: {
        value: cdktn.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_annotations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ignoreAnnotations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ignore_labels: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ignoreLabels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      insecure: {
        value: cdktn.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktn.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_url: {
        value: cdktn.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_server_name: {
        value: cdktn.stringToHclTerraform(this._tlsServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktn.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktn.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exec: {
        value: cdktn.listMapperHcl(kubernetesProviderExecToHclTerraform, true)(this._exec),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesProviderExecList",
      },
      experiments: {
        value: cdktn.listMapperHcl(kubernetesProviderExperimentsToHclTerraform, true)(this._experiments),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesProviderExperimentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
