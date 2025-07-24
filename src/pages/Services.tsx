import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../services/hooks";
import { fetchServices } from "../services/servicesSlice";
import Modal from "../components/Modal";
import styles from "../styles/Services.module.css";

interface Service {
  id: string | number;
  icon: string;
  title: string;
  subtitle: string;
  col1: string;
  col1Desc: string;
  col2: string;
  col2Desc: string;
  col3: string;
  col3Desc: string;
  details: string;
  additionalInfo: string;
  offer: string;
  validity: string;
  contact: string;
}

const Services: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bankServices, status, error } = useAppSelector(
    (state: any) => state.services
  );

  const [selected, setSelected] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchServices());
    }
  }, [dispatch, status]);

  const handleViewDetails = (service: Service, index: number): void => {
    setSelected(service);
    setIsModalOpen(true);
    setActiveButtonIndex(index);
  };

  const renderIconBlocks = (): ReactNode => {
    if (bankServices.length === 0) return null;
    return bankServices.slice(0, 3).map((service: Service, index: number) => (
      <div key={service.id} className={styles.iconBlock}>
        <div className={styles.iconCircle}>
          <img src={service.icon} alt={service.title} />
        </div>
        <h4>{service.title}</h4>
        <p className={styles.text}>{service.subtitle}</p>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconBlockWrapper}>{renderIconBlocks()}</div>

      <h2>Bank Services List</h2>

      {status === "loading" && <p>Loading services...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && bankServices.length === 0 && (
        <p>No services available</p>
      )}

      {status === "succeeded" &&
        bankServices.map((service: Service, index: number) => (
          <div key={service.id} className={styles.card}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={styles.iconBox}>
                <img src={service.icon} alt={service.title} />
              </div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <h4>{service.title}</h4>
                  <span>{service.subtitle}</span>
                </div>
                <div className={styles.column}>
                  <h4>{service.col1}</h4>
                  <span>{service.col1Desc}</span>
                </div>
                <div className={styles.column}>
                  <h4>{service.col2}</h4>
                  <span>{service.col2Desc}</span>
                </div>
                <div className={styles.column}>
                  <h4>{service.col3}</h4>
                  <span>{service.col3Desc}</span>
                </div>
              </div>
            </div>
            <button
              className={`${styles.viewDetailsButton} ${
                activeButtonIndex === index ? styles.active : ""
              }`}
              onClick={() => handleViewDetails(service, index)}
            >
              {activeButtonIndex === index ? "Hide Details" : "View Details"}
            </button>
            {activeButtonIndex === index && (
              <div className={styles.detailsContainer}>
                <p>
                  <b>Details:</b> {service.details}
                </p>
                <p>
                  <b>Additional Info:</b> {service.additionalInfo}
                </p>
                <p>
                  <b>Offer:</b> {service.offer}
                </p>
                <p>
                  <b>Validity:</b> {service.validity}
                </p>
                <p>
                  <b>Contact:</b> {service.contact}
                </p>
              </div>
            )}
          </div>
        ))}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={
          selected && (
            <>
              <h3>{selected.title}</h3>
              <p>{selected.details}</p>
              <p>
                <b>Additional Info:</b> {selected.additionalInfo}
              </p>
              <p>
                <b>Offer:</b> {selected.offer}
              </p>
              <p>
                <b>Validity:</b> {selected.validity}
              </p>
              <p>
                <b>Contact:</b> {selected.contact}
              </p>
            </>
          )
        }
      />
    </div>
  );
};

export default Services;
