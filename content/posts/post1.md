<!-- ---
title: "How Well Do Deep Learning Models Handle Unseen Data?"
# A comprehensive analysis of DL architectures on their generalisability over unseen domains"
date: "10-08-2024"
author: "Muhammad Saram Hassan"
summary: "TLDR: This blogpost analyzes how different Deep Learning models, in particular, ResNet-50, Vision Transformer (ViT), and CLIP, generalize to unseen domains. It compares their performance across IID datasets, OOD datasets, and custom datasets probing inductive biases in shape, texture, color, and locality."
tags:
  [
    "Architectural Biases",
    "CLIP",
    "Deep Learning",
    "Model Understanding",
    "Resnet-50",
    "ViT",
  ]
featured: true
---

In real-world AI applications, models often encounter data that looks very different from what they were trained on. The ability of models to generalize beyond the training distribution, a challenge called **domain generalization** can drastically affect performance.


In this blog, we dive into an analysis of three leading deep learning models, _ResNet-50, Vision Transformer (ViT), and CLIP_, and test how they fare across standard IID datasets, out-of-domain (OOD) scenarios, and specially designed experiments that highlight their inductive biases.



---

## Step 1: Setting the Stage – Model Choices

The study compares:

- **ResNet-50** – a classic convolutional neural network (CNN) known for its robustness.
- **Vision Transformer (ViT)** – a transformer-based model that captures global relationships in images.
- **CLIP** – a contrastive model that learns by aligning images with text, excelling in zero-shot learning.

📸 _\[Insert image of the three model architectures side-by-side here]_

You can read about the intricacies of these models and understand how they work through here.

---

## Step 2: In-Domain Performance (CIFAR-10)

On the standard CIFAR-10 dataset (where training and testing data share the same distribution), all three models performed strongly:

- **ViT**: 96.1%
- **ResNet-50**: 81%
- **CLIP**: 87.4%

ViT’s global attention helped it outperform others, while ResNet’s performance was strong despite fewer epochs. CLIP also showed competitive results thanks to its text-image alignment.

📸 _\[Insert accuracy bar chart for CIFAR-10 results]_

---

## Step 3: Out-of-Domain Testing (SVHN & PACS)

When tested on datasets with **domain shifts**:

- **SVHN (semantic shift – digits instead of objects)**:

  - ViT: 46.1%
  - ResNet-50: 44%
  - CLIP: 13.7%

- **PACS (covariate shift – Photos, Art, Cartoons, Sketches)**:
  Expected performance dropped further for all models, as stylized domains broke their learned assumptions.

This highlights a key insight: even state-of-the-art models falter when the test data deviates from their training world.

📸 _\[Insert SVHN example images with blurred/occluded digits]_
📸 _\[Insert PACS sample images showing Photo vs Cartoon vs Sketch versions]_

---

## Step 4: Probing Inductive Biases

To go deeper, custom datasets were created to isolate **shape, texture, and color** as classification cues.

- **ResNet-50** relied heavily on **texture** (biased toward local patterns).
- **ViT** leaned more on **color and global context**, but struggled when only shapes were available.
- **CLIP** showed more balance, handling **shape and color** better but still dropped on texture-heavy datasets.

📸 _\[Insert sample edge-detected CIFAR-10 (shape-only) images]_
📸 _\[Insert stylized images with new textures]_
📸 _\[Insert partially grayscaled images (color bias experiment)]_

---

## Step 5: Local vs Global Biases

By adding **noise patches, scrambling images, and applying global style changes**, the analysis revealed:

- **ResNet-50**: Strong with noise, weak with scrambled/global changes.
- **ViT**: Most robust overall, thanks to global attention.
- **CLIP**: Resilient to local noise, but vulnerable to global shifts.

📸 _\[Insert comparison table/heatmap of accuracies under noise, scramble, and style changes]_

---

## Step 6: Combining Convolution & Attention

The report concluded by exploring **hybrid architectures** that merge convolution (local feature extraction) with attention (global context). Operations like **attention-modulated convolution** and **convolution-modulated attention** were discussed as promising ways forward for improving generalization.

📸 _\[Insert illustrative diagram showing convolution vs attention vs hybrid]_

---

## Final Thoughts

This analysis shows a clear pattern:

- **CNNs (ResNet-50)**: Strong on textures and local features but weak on global changes.
- **Transformers (ViT)**: Superior generalization on color and global patterns, though less reliable on shapes.
- **Multimodal Models (CLIP)**: Versatile but underperform in specialized domains like digit recognition.

The path forward likely lies in **hybrid architectures**—blending the strengths of convolution and self-attention to build models that are both locally precise and globally aware.

---

👉 If you’re working with AI in real-world applications, remember: the true test of a model is not just how well it does in-domain, but how gracefully it fails when reality doesn’t match its training set.

---

Would you like me to also **design the blog post layout** (like a Medium-style article with suggested headers, figure captions, and color palette), so you can directly paste it into a CMS/website? -->

### Generalizability of Deep Learning Models Across Unseen Domains

In the previous installments of this blog series, we've explored various facets of deep learning, from model pruning to fundamental architectural concepts. Building on that foundation, this post delves into a critical challenge in real-world AI applications: **domain generalization**. How well do our meticulously trained deep learning models perform when faced with data that looks significantly different from what they were trained on? This question is central to deploying robust and reliable AI systems.

Today, we'll walk through an analysis of several popular deep learning models—Vision Transformer (ViT), ResNet-50, and CLIP—evaluating their ability to generalize across various "unseen" domains. We'll explore the reasons behind performance drops in out-of-domain scenarios and discuss the architectural characteristics that influence a model's robustness. This exploration is inspired by practical challenges in machine learning and aims to provide insights for developing more generalizable AI.

### The Challenge of Domain Shift

Deep learning models are incredibly powerful, but their performance often degrades when the test data distribution differs from the training data distribution. This is known as **domain shift**, and it's a common issue in real-world applications. Imagine a model trained to recognize objects in clear, well-lit photos. How well will it perform on blurry images, sketches, or photos taken under different lighting conditions? Understanding this gap is crucial for building deployable AI.

To investigate this, we selected three distinct models:

1.  **Vision Transformer (ViT):** Known for its global context-capturing capabilities through self-attention, often outperforming traditional CNNs in scenarios requiring long-range context.
2.  **ResNet-50:** A classic convolutional neural network (CNN) architecture, highly robust due to its deep residual connections, which mitigate vanishing gradients and enable learning deeper representations.
3.  **CLIP (Contrastive Language-Image Pre-training):** A contrastive model, remarkable for its ability to generalize across different modalities (text and images) for zero-shot learning tasks.

These models were chosen for their diverse architectures and learning paradigms, allowing us to assess how different approaches handle domain generalization under varying conditions.

### Baseline Performance: IID Dataset Evaluation

Before testing domain generalization, it's essential to establish a baseline. We evaluated all three models on a standard **Independent and Identically Distributed (IID)** dataset, CIFAR-10. This dataset consists of 60,000 images across 10 classes, and it serves as a controlled environment where training and testing data come from the same distribution.

**Methodology (CIFAR-10):**

- **ResNet-50:** A pre-trained ResNet-50 model was fine-tuned for 3 epochs on CIFAR-10. Images were resized to 224x224, converted to tensors, and normalized. The model was optimized using the Adam optimizer and CrossEntropyLoss.
- **ViT:** Similar to ResNet-50, a pre-trained ViT model was fine-tuned on CIFAR-10 with an increased batch size (256).
- **CLIP:** Initialized with pre-trained weights, it used tokenized text descriptions corresponding to CIFAR-10 classes. Image and text features were encoded, and cosine similarity was used to predict class labels.

**Results (CIFAR-10):**

- **ViT:** 96.11% accuracy
- **CLIP:** 87.4% accuracy
- **ResNet-50:** 81.00% accuracy

<br>
These results confirm strong performance on an IID dataset, indicating the models' ability to learn and classify images effectively under ideal conditions. ViT's high accuracy is attributed to its ability to leverage information from large-scale pre-training (ImageNet) and its transformer-based architecture. ResNet-50's deep architecture and pre-trained knowledge contribute to its robustness, while CLIP's multimodal pre-training helps it capture contextual similarities. This baseline provides a crucial reference point for understanding performance drops in more challenging out-of-domain scenarios.

### Domain Generalization: Tackling Semantic Shift

Next, we evaluated the models on datasets exhibiting significant **domain shifts**, specifically focusing on **semantic shift**—where the content or "meaning" of the data changes. The **SVHN (Street View House Numbers)** dataset was chosen for this task. SVHN images consist of house numbers extracted from street-level photos, introducing real-world noise, blurriness, overlapping digits, and various lighting conditions, making it a challenging digit classification task compared to simpler datasets like MNIST.

**Methodology (SVHN):**

The methodology was identical to the CIFAR-10 evaluation, with the only change being the dataset itself. The models, pre-trained on ImageNet and fine-tuned for 3 epochs on CIFAR-10, were then tested on SVHN without further specific training on SVHN.

**Results (SVHN):**

- **ViT:** 46.05% accuracy
- **ResNet-50:** 43.96% accuracy
- **CLIP:** 13.69% accuracy

<br>
The significant drop in accuracy for all models on the SVHN dataset highlights the challenge of semantic shift. Let's break down why:

**ResNet-50:**
ResNet-50, pre-trained on ImageNet (a dataset of 1,000 natural object classes), struggled because the features it learned—intricate textures, colors, and object boundaries—don't transfer effectively to SVHN, which focuses on digit recognition from street-level images. The semantic mismatch means the model's learned features are not optimal for the new task. The limited fine-tuning (3 epochs) also means it couldn't fully adapt to the new domain.

**ViT:**
Similar to ResNet-50, ViT's initial pre-training on ImageNet and subsequent fine-tuning on CIFAR-10 introduced a semantic shift when applied to SVHN. While ViT excels at capturing global context, its prior experience with varied natural images differs from the digit-based focus of SVHN. The model struggles to adapt to recognizing numbers from street scenes after being trained on a more diverse set of objects. The graph above illustrates the fine-tuning process for ViT on SVHN, showing how training and testing accuracy diverge, hinting at the challenges of domain adaptation.

**CLIP:**
CLIP performed particularly poorly. This is because CLIP was pre-trained to align text and images on _general concepts_, not specific tasks like digit classification. The semantic shift is profound: CLIP isn't optimized for the narrow task of recognizing house numbers. Furthermore, SVHN images (as shown above in "ViT" section and in "ResNet-50") contain not just digits but also background elements like bricks and doors. CLIP's reliance on broader contextual understanding meant it often misclassified these busy images. The images provided in the document (like the house numbers and the 61 THE NOOK example) clearly show the complexity of SVHN's natural scene context that challenges models trained on generalized datasets.

### Inductive Biases: Shape, Texture, and Color

To further understand why models struggle with domain generalization, we investigated their **inductive biases**—what visual cues they prioritize for classification. We created custom datasets emphasizing shape, texture, or color, downplaying the others.

**Methodology:**

- **Shape Dataset:** CIFAR-10 images were processed using Canny edge detection (as seen in the "Shape" example above), converting them to grayscale and extracting outlines. This isolates shape information.
- **Texture Dataset:** Neural style transfer was applied to CIFAR-10 images using a pre-trained TensorFlow Hub model. This technique blended a random style texture with the content image (as seen in the "Texture" example above), effectively altering the texture while largely preserving shape.
- **Color Dataset:** Localized color bias was introduced by randomly cropping and grayscaling parts of CIFAR-10 images. This selectively desaturated areas of the image, simulating color shifts.

**Results:**

| Model         | Total Acc. (CIFAR-10) | Shape Acc. | Shape Bias | Texture Acc. | Texture Bias | Color Acc. | Color Bias |
| :------------ | :-------------------- | :--------- | :--------- | :----------- | :----------- | :--------- | :--------- |
| **ResNet-50** | 81.38%                | 13.99%     | 0.1719     | 19.43%       | 0.2387       | 72.25%     | 0.8878     |
| **ViT**       | 96.14%                | 15.39%     | 0.1601     | 49.14%       | 0.5112       | 90.20%     | 0.9382     |
| **CLIP**      | 87.4%                 | 21.29%     | 0.2436     | 30.86%       | 0.3531       | 74.70%     | 0.8547     |

<br>
Let's unpack these results:

**ResNet-50:**

- **Shape:** Performs poorly (13.99% accuracy). ResNet-50, a CNN, heavily relies on local patterns, textures, and colors learned from ImageNet. Without these cues, it struggles to recognize objects based solely on global shape. This highlights CNNs' difficulty in integrating information across larger spatial contexts for shape recognition.
- **Texture:** Also performs poorly (19.43% accuracy). While CNNs are excellent at detecting fine-grained textures, they struggle when these textures are radically altered or do not align with learned patterns. The model might misclassify a cat with a brick texture as a "brick/wall" because its texture bias overrides other cues.
- **Color:** Shows a reasonable accuracy (72.25%). While ResNet-50 implicitly captures color features, localized grayscale transformations didn't cause an extreme drop because parts of the image still retained color.

**ViT:**

- **Shape:** Performs poorly (15.39% accuracy). ViT models, trained on color and texture-rich datasets, struggle with simplified Canny edge representations. Their reliance on global attention for holistic representations is less effective when only outlines are available, especially with lower-quality CIFAR-10 edges.
- **Texture:** Achieves moderate accuracy (49.14%). ViT struggles when textures are highly stylized or altered, as its global context-capturing ability is confused by textures that don't match its training data. This is particularly noticeable in low-quality datasets where structural information is already limited.
- **Color:** Performs very well (90.20% accuracy). ViT's ability to capture global patterns and spatial structures allows it to recognize objects even when color information is partially removed or altered. Its training on diverse datasets with varied color distributions likely contributes to its robustness against color changes.

**CLIP:**

- **Shape:** Struggles (21.29% accuracy). While CLIP captures global and semantic information better than ResNet-50, the absence of rich texture and color in Canny edge datasets leaves it with minimal visual data. Its multimodal training on rich images means it's not optimized for abstract shapes.
- **Texture:** Struggles significantly (30.86% accuracy). CLIP, trained on datasets where texture and shape co-occur, finds it difficult to classify objects when texture is varied but shape is preserved. The overall structure is "missing or warped" from CLIP's perspective, as it lacks the semantic context it usually relies on for classification.
- **Color:** Shows good accuracy (74.70% accuracy). CLIP's broader understanding of images and its reliance on higher-level semantics make it more resilient to color changes. It leverages color when present but isn't overly dependent on it, allowing it to generalize across different color schemes.

### Inductive Biases: Locality

Finally, we explored models' biases towards **local versus global information** by introducing different types of perturbations: localized noise, global style changes, and scrambled image patches.

**Methodology:**

- **Noisy Dataset:** Localized Gaussian noise was applied to a small 8x8 pixel patch within each CIFAR-10 image (e.g., the grey square in the "Noisy" graph above).
- **Global-Style Transformation Dataset:** Global color transformations were applied, including random adjustments to brightness, hue, contrast, and color balance (as shown in the "Global Style Change" graph above, illustrating how this transforms an image).
- **Scrambled Dataset:** CIFAR-10 images were divided into 8x8 pixel patches, which were then randomly shuffled to disrupt the image's structure while preserving pixel content (as shown in the "Scrambled Destrest" example above).

**Results:**

| Model         | Total Acc. (CIFAR-10) | Localized Noise Acc. | Scrambled Image Acc. | Global Style Change Acc. |
| :------------ | :-------------------- | :------------------- | :------------------- | :----------------------- |
| **ResNet-50** | 81.38%                | 79.25%               | 45.70%               | 31.05%                   |
| **ViT**       | 96.14%                | 95.35%               | 65.00%               | 85.85%                   |
| **CLIP**      | 87.4%                 | 84.35%               | 38.85%               | 53.73%                   |

<br>
Here are the insights from these experiments:

**ResNet-50:**

- **Localized Noise:** Shows a small decline (79.25% accuracy). CNNs are sensitive to local patterns, but pooling layers (like max-pooling) and redundant feature capture allow ResNet-50 to mitigate the effects of small, localized noise. Its pre-training on ImageNet also contributes to resilience.
- **Scrambled Images:** Performs poorly (45.70% accuracy). ResNet-50 heavily relies on the spatial coherence of features. When image patches are scrambled, the local features no longer align, disrupting the network's ability to recognize global structures.
- **Global Style Change:** Performs very poorly (31.05% accuracy). CNNs are highly sensitive to global color and texture changes. Altering HSV values globally distorts learned patterns at every level, leading to a significant drop in accuracy.

**ViT:**

- **Localized Noise:** Achieves high accuracy (95.35%). ViT's architecture, which captures global patterns, can leverage intact portions of the image to classify accurately. It has developed resilience to localized perturbations from diverse training data.
- **Scrambled Images:** Achieves moderate accuracy (65.00%). ViT relies on global structure and contextual relationships. While scrambling disrupts spatial information, ViT's ability to capture long-range dependencies allows it to still extract some relevant patterns, outperforming CNNs and CLIP in this scenario.
- **Global Style Change:** Maintains high accuracy (85.85%). ViT's performance is robust to global style changes because these alterations often don't drastically affect the overall shape and structure of objects. Its diverse pre-training also provides resilience to varied color distributions.

**CLIP:**

- **Localized Noise:** Performs well (84.35% accuracy). CLIP's holistic approach, focusing on broader visual and semantic patterns, allows it to correctly identify objects even when small parts of the image are obscured.
- **Scrambled Images:** Performs poorly (38.85% accuracy). While CLIP is better at handling globally altered spatial structures than ResNet-50, scrambling severely disrupts global context and spatial arrangement, which are crucial for its multimodal understanding.
- **Global Style Change:** Shows a significant drop (53.73% accuracy). CLIP is sensitive to global changes in color and style because these transformations affect the overall appearance, making it harder to match images to learned semantic associations.

### Key Takeaways for ML Students

1.  **Domain Shift is a Major Challenge:** As demonstrated, even state-of-the-art models suffer significant performance drops when faced with out-of-domain data. This highlights the importance of robust evaluation beyond IID datasets.
2.  **Architectural Biases Matter:**
    - **CNNs (ResNet-50):** Rely heavily on local features, textures, and colors. They are robust to localized noise but highly vulnerable to global style changes and scrambled images due to their dependence on spatial coherence.
    - **Transformers (ViT):** Excel at capturing global context and relationships, making them more robust to global style changes and somewhat resilient to scrambled images, but they struggle with abstract shape-only data.
    - **Multimodal Models (CLIP):** Leverage broad semantic understanding but can be sensitive to semantic shifts (e.g., from natural objects to digits) and struggle when explicit contextual information is removed (like in scrambled images).
3.  **Pre-training is Key, but Specificity Helps:** Large-scale pre-training (like on ImageNet) provides powerful generalized features, but fine-tuning on domain-specific data is often necessary to adapt models to new tasks and distributions effectively. However, limited fine-tuning can be insufficient to overcome significant domain shifts.
4.  **Depiction is Not Endorsement:** It's important to remember that the visual representations we generate and analyze in this study, whether they are of street signs, textured objects, or abstract shapes, are purely for the purpose of scientific investigation into model behavior.
5.  **Data Augmentation & Domain Adaptation:** To improve generalization, techniques like advanced data augmentation (e.g., mixing styles, introducing various noise types) and domain adaptation algorithms (e.g., adversarial training, meta-learning) are crucial. These methods aim to make models less dependent on specific domain characteristics and more capable of learning truly invariant features.

Understanding these inductive biases and the ways models react to different forms of domain shift is vital for developing more robust, reliable, and generalizable deep learning systems. As you continue your ML journey, always consider the real-world deployment challenges and the need for models that can confidently navigate unseen data.
