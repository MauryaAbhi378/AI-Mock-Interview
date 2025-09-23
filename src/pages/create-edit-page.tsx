import FormMockInterview from "@/components/form-mock-interview";
import { db } from "@/config/firebase.config";
import type { Interview } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CreateEditPage = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [interview, setInterview] = useState<Interview | null>(null);

  useEffect(() => {
    const fetchInterview = async () => {
      if (interviewId) {
        try {
          const interviewDoc = await getDoc(doc(db, "interviews", interviewId));

          if (interviewDoc) {
            setInterview({ ...interviewDoc.data() } as Interview);
          }
        } catch (err) {
          console.log("Error while fetching Interview", err);
        }
      }
    };

    fetchInterview();
  }, [interviewId]);

  return (
    <div className="w-full flex-col space-y-4">
      <FormMockInterview initialData={interview} />
    </div>
  );
};

export default CreateEditPage;
