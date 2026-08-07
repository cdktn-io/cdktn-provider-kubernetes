# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-kubernetes.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### KubernetesProviderFunctions <a name="KubernetesProviderFunctions" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions"></a>

Provider-defined functions of the kubernetes provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.Initializer"></a>

```python
from cdktn_provider_kubernetes import provider_functions

providerFunctions.KubernetesProviderFunctions(
  provider_local_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.Initializer.parameter.providerLocalName">provider_local_name</a></code> | <code>str</code> | The local name of the provider in required_providers; |

---

##### `provider_local_name`<sup>Required</sup> <a name="provider_local_name" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* str

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecode">manifest_decode</a></code> | Given a YAML text containing a Kubernetes manifest, will decode and return an object representation of that resource. |
| <code><a href="#@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecodeMulti">manifest_decode_multi</a></code> | Given a YAML text containing a Kubernetes manifest with multiple resources, will decode the manifest and return a tuple of object representations for each resource. |
| <code><a href="#@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestEncode">manifest_encode</a></code> | Given an object representation of a Kubernetes manifest, will encode and return a YAML string for that resource. |

---

##### `manifest_decode` <a name="manifest_decode" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecode"></a>

```python
def manifest_decode(
  manifest: str
) -> IResolvable
```

Given a YAML text containing a Kubernetes manifest, will decode and return an object representation of that resource.

###### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecode.parameter.manifest"></a>

- *Type:* str

The YAML text for a Kubernetes manifest.

---

##### `manifest_decode_multi` <a name="manifest_decode_multi" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecodeMulti"></a>

```python
def manifest_decode_multi(
  manifest: str
) -> IResolvable
```

Given a YAML text containing a Kubernetes manifest with multiple resources, will decode the manifest and return a tuple of object representations for each resource.

###### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestDecodeMulti.parameter.manifest"></a>

- *Type:* str

The YAML plaintext for a Kubernetes manifest.

---

##### `manifest_encode` <a name="manifest_encode" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestEncode"></a>

```python
def manifest_encode(
  manifest: typing.Any
) -> str
```

Given an object representation of a Kubernetes manifest, will encode and return a YAML string for that resource.

###### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-kubernetes.providerFunctions.KubernetesProviderFunctions.manifestEncode.parameter.manifest"></a>

- *Type:* typing.Any

The object representation of a Kubernetes manifest.

---





