import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTicket = await Ticket.findOne({ _id: id });
    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  console.log("delete function");
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    console.log("Deleting Started");
    return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting ticket:", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;
    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });
    console.log("PUT Ran");
    return NextResponse.json({ message: "Ticket Updated" }, { status: 200 });
  } catch (error) {
    console.error("Error Updating ticket:", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
