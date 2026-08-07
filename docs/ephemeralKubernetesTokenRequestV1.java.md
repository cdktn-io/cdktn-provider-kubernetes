# `ephemeralKubernetesTokenRequestV1` Submodule <a name="`ephemeralKubernetesTokenRequestV1` Submodule" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralKubernetesTokenRequestV1 <a name="EphemeralKubernetesTokenRequestV1" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1 kubernetes_token_request_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_token_request_v1.EphemeralKubernetesTokenRequestV1;

EphemeralKubernetesTokenRequestV1.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .metadata(EphemeralKubernetesTokenRequestV1Metadata)
//  .expirationTimestamp(java.lang.String)
//  .spec(EphemeralKubernetesTokenRequestV1Spec)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.expirationTimestamp">expirationTimestamp</a></code> | <code>java.lang.String</code> | ExpirationTimestamp is the time of expiration of the returned token. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Token is the opaque bearer token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#metadata EphemeralKubernetesTokenRequestV1#metadata}

---

##### `expirationTimestamp`<sup>Optional</sup> <a name="expirationTimestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.expirationTimestamp"></a>

- *Type:* java.lang.String

ExpirationTimestamp is the time of expiration of the returned token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#expiration_timestamp EphemeralKubernetesTokenRequestV1#expiration_timestamp}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#spec EphemeralKubernetesTokenRequestV1#spec}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Token is the opaque bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#token EphemeralKubernetesTokenRequestV1#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetExpirationTimestamp">resetExpirationTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata"></a>

```java
public void putMetadata(EphemeralKubernetesTokenRequestV1Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec"></a>

```java
public void putSpec(EphemeralKubernetesTokenRequestV1Spec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

---

##### `resetExpirationTimestamp` <a name="resetExpirationTimestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetExpirationTimestamp"></a>

```java
public void resetExpirationTimestamp()
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetSpec"></a>

```java
public void resetSpec()
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isConstruct"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_token_request_v1.EphemeralKubernetesTokenRequestV1;

EphemeralKubernetesTokenRequestV1.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_token_request_v1.EphemeralKubernetesTokenRequestV1;

EphemeralKubernetesTokenRequestV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_token_request_v1.EphemeralKubernetesTokenRequestV1;

EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference">EphemeralKubernetesTokenRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference">EphemeralKubernetesTokenRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestampInput">expirationTimestampInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadataInput">metadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.specInput">specInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestamp">expirationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadata"></a>

```java
public EphemeralKubernetesTokenRequestV1MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference">EphemeralKubernetesTokenRequestV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.spec"></a>

```java
public EphemeralKubernetesTokenRequestV1SpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference">EphemeralKubernetesTokenRequestV1SpecOutputReference</a>

---

##### `expirationTimestampInput`<sup>Optional</sup> <a name="expirationTimestampInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestampInput"></a>

```java
public java.lang.String getExpirationTimestampInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadataInput"></a>

```java
public IResolvable|EphemeralKubernetesTokenRequestV1Metadata getMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.specInput"></a>

```java
public IResolvable|EphemeralKubernetesTokenRequestV1Spec getSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `expirationTimestamp`<sup>Required</sup> <a name="expirationTimestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestamp"></a>

```java
public java.lang.String getExpirationTimestamp();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralKubernetesTokenRequestV1Config <a name="EphemeralKubernetesTokenRequestV1Config" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_token_request_v1.EphemeralKubernetesTokenRequestV1Config;

EphemeralKubernetesTokenRequestV1Config.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .metadata(EphemeralKubernetesTokenRequestV1Metadata)
//  .expirationTimestamp(java.lang.String)
//  .spec(EphemeralKubernetesTokenRequestV1Spec)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.expirationTimestamp">expirationTimestamp</a></code> | <code>java.lang.String</code> | ExpirationTimestamp is the time of expiration of the returned token. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.token">token</a></code> | <code>java.lang.String</code> | Token is the opaque bearer token. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.metadata"></a>

```java
public EphemeralKubernetesTokenRequestV1Metadata getMetadata();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#metadata EphemeralKubernetesTokenRequestV1#metadata}

---

##### `expirationTimestamp`<sup>Optional</sup> <a name="expirationTimestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.expirationTimestamp"></a>

```java
public java.lang.String getExpirationTimestamp();
```

- *Type:* java.lang.String

ExpirationTimestamp is the time of expiration of the returned token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#expiration_timestamp EphemeralKubernetesTokenRequestV1#expiration_timestamp}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.spec"></a>

```java
public EphemeralKubernetesTokenRequestV1Spec getSpec();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#spec EphemeralKubernetesTokenRequestV1#spec}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Token is the opaque bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#token EphemeralKubernetesTokenRequestV1#token}

---

### EphemeralKubernetesTokenRequestV1Metadata <a name="EphemeralKubernetesTokenRequestV1Metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_token_request_v1.EphemeralKubernetesTokenRequestV1Metadata;

EphemeralKubernetesTokenRequestV1Metadata.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name must be unique within a namespace. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which each name must be unique. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name must be unique within a namespace.

Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#name EphemeralKubernetesTokenRequestV1#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#namespace EphemeralKubernetesTokenRequestV1#namespace}

---

### EphemeralKubernetesTokenRequestV1Spec <a name="EphemeralKubernetesTokenRequestV1Spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_token_request_v1.EphemeralKubernetesTokenRequestV1Spec;

EphemeralKubernetesTokenRequestV1Spec.builder()
//  .audiences(java.util.List<java.lang.String>)
//  .boundObjectRef(EphemeralKubernetesTokenRequestV1SpecBoundObjectRef)
//  .expirationSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | Audiences are the intendend audiences of the token. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.boundObjectRef">boundObjectRef</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a></code> | bound_object_ref block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.expirationSeconds">expirationSeconds</a></code> | <code>java.lang.Number</code> | ExpirationSeconds is the requested duration of validity of the request. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

Audiences are the intendend audiences of the token.

A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#audiences EphemeralKubernetesTokenRequestV1#audiences}

---

##### `boundObjectRef`<sup>Optional</sup> <a name="boundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.boundObjectRef"></a>

```java
public EphemeralKubernetesTokenRequestV1SpecBoundObjectRef getBoundObjectRef();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

bound_object_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#bound_object_ref EphemeralKubernetesTokenRequestV1#bound_object_ref}

---

##### `expirationSeconds`<sup>Optional</sup> <a name="expirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.expirationSeconds"></a>

```java
public java.lang.Number getExpirationSeconds();
```

- *Type:* java.lang.Number

ExpirationSeconds is the requested duration of validity of the request.

The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#expiration_seconds EphemeralKubernetesTokenRequestV1#expiration_seconds}

---

### EphemeralKubernetesTokenRequestV1SpecBoundObjectRef <a name="EphemeralKubernetesTokenRequestV1SpecBoundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_token_request_v1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef;

EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.builder()
//  .apiVersion(java.lang.String)
//  .kind(java.lang.String)
//  .name(java.lang.String)
//  .uid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | API version of the referent. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.kind">kind</a></code> | <code>java.lang.String</code> | Kind of the referent. Valid kinds are 'Pod' and 'Secret'. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.uid">uid</a></code> | <code>java.lang.String</code> | UID of the referent. |

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#api_version EphemeralKubernetesTokenRequestV1#api_version}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Kind of the referent. Valid kinds are 'Pod' and 'Secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#kind EphemeralKubernetesTokenRequestV1#kind}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#name EphemeralKubernetesTokenRequestV1#name}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

UID of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#uid EphemeralKubernetesTokenRequestV1#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralKubernetesTokenRequestV1MetadataOutputReference <a name="EphemeralKubernetesTokenRequestV1MetadataOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_token_request_v1.EphemeralKubernetesTokenRequestV1MetadataOutputReference;

new EphemeralKubernetesTokenRequestV1MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|EphemeralKubernetesTokenRequestV1Metadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

---


### EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference <a name="EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_token_request_v1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference;

new EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion">resetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetUid">resetUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiVersion` <a name="resetApiVersion" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion"></a>

```java
public void resetApiVersion()
```

##### `resetKind` <a name="resetKind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetKind"></a>

```java
public void resetKind()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetUid` <a name="resetUid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetUid"></a>

```java
public void resetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput">apiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput">uidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput"></a>

```java
public java.lang.String getApiVersionInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput"></a>

```java
public java.lang.String getUidInput();
```

- *Type:* java.lang.String

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue"></a>

```java
public IResolvable|EphemeralKubernetesTokenRequestV1SpecBoundObjectRef getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

---


### EphemeralKubernetesTokenRequestV1SpecOutputReference <a name="EphemeralKubernetesTokenRequestV1SpecOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_token_request_v1.EphemeralKubernetesTokenRequestV1SpecOutputReference;

new EphemeralKubernetesTokenRequestV1SpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef">putBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetBoundObjectRef">resetBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetExpirationSeconds">resetExpirationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBoundObjectRef` <a name="putBoundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef"></a>

```java
public void putBoundObjectRef(EphemeralKubernetesTokenRequestV1SpecBoundObjectRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

---

##### `resetAudiences` <a name="resetAudiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetAudiences"></a>

```java
public void resetAudiences()
```

##### `resetBoundObjectRef` <a name="resetBoundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetBoundObjectRef"></a>

```java
public void resetBoundObjectRef()
```

##### `resetExpirationSeconds` <a name="resetExpirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetExpirationSeconds"></a>

```java
public void resetExpirationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRef">boundObjectRef</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference">EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRefInput">boundObjectRefInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSecondsInput">expirationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSeconds">expirationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boundObjectRef`<sup>Required</sup> <a name="boundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRef"></a>

```java
public EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference getBoundObjectRef();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference">EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference</a>

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundObjectRefInput`<sup>Optional</sup> <a name="boundObjectRefInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRefInput"></a>

```java
public IResolvable|EphemeralKubernetesTokenRequestV1SpecBoundObjectRef getBoundObjectRefInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

---

##### `expirationSecondsInput`<sup>Optional</sup> <a name="expirationSecondsInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSecondsInput"></a>

```java
public java.lang.Number getExpirationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `expirationSeconds`<sup>Required</sup> <a name="expirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSeconds"></a>

```java
public java.lang.Number getExpirationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.internalValue"></a>

```java
public IResolvable|EphemeralKubernetesTokenRequestV1Spec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

---



