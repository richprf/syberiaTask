"use client"
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import Link from "next/link";

const ReservationsPage = () => {
  const reservations = useSelector(
    (state: RootState) => state.userReservations.reservations
  );

  console.log("reservations" , reservations)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">رزروهای من</h1>

      {reservations.length === 0 ? (
        <p className="text-gray-600">شما هنوز هیچ رزروی ثبت نکرده‌اید.</p>
      ) : (
        <div className="grid gap-6">
          {reservations.map((res, index) => {
            const startDate = new Date(res.startDate).toLocaleDateString("fa-IR");
            const endDate = new Date(res.endDate).toLocaleDateString("fa-IR");

            return (
              <div
                key={index}
                className="border p-4 rounded-xl shadow-sm bg-white dark:bg-zinc-800 dark:text-white"
              >
                <h2 className="text-lg font-semibold mb-2">
                  {res.house?.title || "خانه بدون عنوان"}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {res.house?.address}
                </p>
                <p className="mt-2">
                  <strong>تاریخ:</strong> {startDate} تا {endDate}
                </p>
                <p>
                  <strong>وضعیت:</strong>{" "}
                  <span
                    className={`px-2 py-1 rounded ${
                      res.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {res.status === "confirmed" ? "تایید شده" : res.status}
                  </span>
                </p>
                <div className="mt-4">
                  <Link
                    href={`/houses/${res.house?.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    مشاهده جزئیات خانه
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ReservationsPage;
