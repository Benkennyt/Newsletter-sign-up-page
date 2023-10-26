import * as yup from "yup";
import "./EmailInput.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const EmailInput = ({ setModalOpen, setGetMail}) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Valid email required")
      .required("Email is required"),
  });

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setModalOpen(true)
    setGetMail(data?.email)
  };

  return (
    <div className="email-dv">
      <div className="email-err">
        <h5>Email address</h5>
        <p>{errors.email?.message}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-space">
          <input
            className="text-space-1"
            type="text"
            placeholder="ash@loremcompany.com"
            {...register("email")}
          />
        </div>
        <input
          className="btn"
          type="submit"
          value={"Subscribe for monthly newsletter"}
        />
      </form>
    </div>
  );
};

export default EmailInput;
