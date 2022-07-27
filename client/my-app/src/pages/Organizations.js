import "../Organizations.css";
import { useState, useEffect } from "react";
import axios from "axios";
import OrganizationCard from "../components/OrganizationCard";

const Organizations = () => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/organizations`);
        setOrganizations(res.data.organizations);
        console.log(res.data.organizations);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrganization();
  }, []);

  if (!organizations) {
    return <h1>Loading Please Wait!</h1>;
  } else {
    return (
      <div className="organizationDiv">
        {organizations.map((organizations) => (
          <OrganizationCard
            className="OrganizationCardDiv"
            name={organizations.name}
            leader={organizations.leader}
            member={organizations.members}
            enemy={organizations.enemies}
          />
        ))}
      </div>
    );
  }
};


export default Organizations;
