
const FAQPage = () => {
  const faqData = [
    {
      question: "How do I place an order?",
      answer: "To place an order, simply browse our products and click on the 'Add to Cart' button for the items you wish to purchase. Once you have added all desired items, proceed to the checkout page to complete your order.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, including Visa, Mastercard, and American Express. We also offer secure payment options such as PayPal and Apple Pay.",
    },
    {
      question: "Can I track my order?",
      answer: "Yes, you will receive a tracking number via email once your order has been shipped. You can use this tracking number to track the progress of your shipment.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to select countries. Shipping costs and delivery times may vary depending on the destination.",
    },
    {
      question: "What is your return policy?",
      answer: "We have a hassle-free return policy. If you are not satisfied with your purchase, you can return it within 30 days of receiving the item for a full refund or exchange. Please note that the item must be in its original condition with all tags and packaging intact.",
    },
    {
      question: "How can I contact customer support?",
      answer: "For any questions or concerns, our customer support team is available 24/7. You can reach us via email at support@example.com or through our live chat feature on the website.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold">{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
