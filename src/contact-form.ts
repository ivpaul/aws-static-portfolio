const contactEndpoint =
  "https://opa7gdycleil2krlqdwh4nq6e40ziezl.lambda-url.us-east-1.on.aws/";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function getRequiredField<T extends HTMLElement>(
  id: string,
  expectedType: { new (): T },
): T | null {
  const field = document.getElementById(id);

  if (!(field instanceof expectedType)) {
    return null;
  }

  return field;
}

export function initContactForm(): void {
  const form = document.getElementById("contact-form");
  const nameField = getRequiredField("name", HTMLInputElement);
  const emailField = getRequiredField("email", HTMLInputElement);
  const messageField = getRequiredField("message", HTMLTextAreaElement);

  if (!(form instanceof HTMLFormElement) || !nameField || !emailField || !messageField) {
    return;
  }

  const submitButton = form.querySelector<HTMLButtonElement>("button[type='submit']");

  if (!submitButton) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const payload: ContactPayload = {
      name: nameField.value.trim(),
      email: emailField.value.trim(),
      message: messageField.value.trim(),
    };

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (response.ok) {
        nameField.disabled = true;
        emailField.disabled = true;
        messageField.disabled = true;
        submitButton.textContent = "Sent!";
        return;
      }

      submitButton.textContent = "Send Message";
      submitButton.disabled = false;
      console.error("Server Error:", data.error ?? "Something went wrong");
    } catch (error) {
      submitButton.textContent = "Send Message";
      submitButton.disabled = false;
      console.error("Network Error:", error);
    }
  });
}
