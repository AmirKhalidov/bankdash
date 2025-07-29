export default function Privileges() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h2>Privileges</h2>
      <p>
        Unlock exclusive benefits and rewards with your account.
        <br />
        Here’s a sneak peek at what’s coming soon:
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <div>
          <img
            src="https://img.icons8.com/fluency/96/medal.png"
            alt="Rewards"
          />
          <h4>Reward Points</h4>
          <p>Earn points for every transaction and redeem for gifts.</p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/fluency/96/vip.png"
            alt="VIP Access"
          />
          <h4>VIP Access</h4>
          <p>Get priority support and early access to new features.</p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/fluency/96/discount.png"
            alt="Discounts"
          />
          <h4>Exclusive Discounts</h4>
          <p>Enjoy special offers from our partners and merchants.</p>
        </div>
      </div>
      <p style={{ marginTop: "2rem", color: "#888" }}>
        More privileges will be available soon. Stay tuned!
      </p>
    </div>
  );
}
