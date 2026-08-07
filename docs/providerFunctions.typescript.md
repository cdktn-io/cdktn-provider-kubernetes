# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-kubernetes.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### KubernetesProviderFunctions <a name="KubernetesProviderFunctions" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions"></a>

Provider-defined functions of the kubernetes provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.Initializer"></a>

```typescript
import { providerFunctions } from '@cdktn/provider-kubernetes'

new providerFunctions.KubernetesProviderFunctions(providerLocalName: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.Initializer.parameter.providerLocalName">providerLocalName</a></code> | <code>string</code> | The local name of the provider in required_providers; |

---

##### `providerLocalName`<sup>Required</sup> <a name="providerLocalName" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* string

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecode">manifestDecode</a></code> | Given a YAML text containing a Kubernetes manifest, will decode and return an object representation of that resource. |
| <code><a href="#@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecodeMulti">manifestDecodeMulti</a></code> | Given a YAML text containing a Kubernetes manifest with multiple resources, will decode the manifest and return a tuple of object representations for each resource. |
| <code><a href="#@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestEncode">manifestEncode</a></code> | Given an object representation of a Kubernetes manifest, will encode and return a YAML string for that resource. |

---

##### `manifestDecode` <a name="manifestDecode" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecode"></a>

```typescript
public manifestDecode(manifest: string): IResolvable
```

Given a YAML text containing a Kubernetes manifest, will decode and return an object representation of that resource.

###### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecode.parameter.manifest"></a>

- *Type:* string

The YAML text for a Kubernetes manifest.

---

##### `manifestDecodeMulti` <a name="manifestDecodeMulti" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecodeMulti"></a>

```typescript
public manifestDecodeMulti(manifest: string): IResolvable
```

Given a YAML text containing a Kubernetes manifest with multiple resources, will decode the manifest and return a tuple of object representations for each resource.

###### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecodeMulti.parameter.manifest"></a>

- *Type:* string

The YAML plaintext for a Kubernetes manifest.

---

##### `manifestEncode` <a name="manifestEncode" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestEncode"></a>

```typescript
public manifestEncode(manifest: any): string
```

Given an object representation of a Kubernetes manifest, will encode and return a YAML string for that resource.

###### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestEncode.parameter.manifest"></a>

- *Type:* any

The object representation of a Kubernetes manifest.

---





