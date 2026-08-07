# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-kubernetes.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### KubernetesProviderFunctions <a name="KubernetesProviderFunctions" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions"></a>

Provider-defined functions of the kubernetes provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new KubernetesProviderFunctions(string ProviderLocalName);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.Initializer.parameter.providerLocalName">ProviderLocalName</a></code> | <code>string</code> | The local name of the provider in required_providers; |

---

##### `ProviderLocalName`<sup>Required</sup> <a name="ProviderLocalName" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* string

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecode">ManifestDecode</a></code> | Given a YAML text containing a Kubernetes manifest, will decode and return an object representation of that resource. |
| <code><a href="#@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecodeMulti">ManifestDecodeMulti</a></code> | Given a YAML text containing a Kubernetes manifest with multiple resources, will decode the manifest and return a tuple of object representations for each resource. |
| <code><a href="#@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestEncode">ManifestEncode</a></code> | Given an object representation of a Kubernetes manifest, will encode and return a YAML string for that resource. |

---

##### `ManifestDecode` <a name="ManifestDecode" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecode"></a>

```csharp
private IResolvable ManifestDecode(string Manifest)
```

Given a YAML text containing a Kubernetes manifest, will decode and return an object representation of that resource.

###### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecode.parameter.manifest"></a>

- *Type:* string

The YAML text for a Kubernetes manifest.

---

##### `ManifestDecodeMulti` <a name="ManifestDecodeMulti" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecodeMulti"></a>

```csharp
private IResolvable ManifestDecodeMulti(string Manifest)
```

Given a YAML text containing a Kubernetes manifest with multiple resources, will decode the manifest and return a tuple of object representations for each resource.

###### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecodeMulti.parameter.manifest"></a>

- *Type:* string

The YAML plaintext for a Kubernetes manifest.

---

##### `ManifestEncode` <a name="ManifestEncode" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestEncode"></a>

```csharp
private string ManifestEncode(object Manifest)
```

Given an object representation of a Kubernetes manifest, will encode and return a YAML string for that resource.

###### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestEncode.parameter.manifest"></a>

- *Type:* object

The object representation of a Kubernetes manifest.

---





