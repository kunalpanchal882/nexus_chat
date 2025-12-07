import { Request, Response } from "express";
import channelModel from "../models/channel.model";

async function getChannels(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user;

    const channel = await channelModel.find({
      members: userId,
    });

    res.json({ success: true, channel });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
}

async function createChannel(req: Request, res: Response): Promise<void> {
  try {
    const { name, topic } = req.body;

    console.log(req.user);

    const channel = await channelModel.create({
      name,
      topic,
      createdBy: req.user,
      members: [req.user],
    });

    res.status(201).json({
      success: true,
      channel,
    });
  } catch (error) {
    console.error("Channel create error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function joinChannel(req: Request, res: Response): Promise<void> {
  try {
    const user = req.user
    const { channelId } = req.params;

    const channel = await channelModel.findById(channelId);
    if (!channel?.members.includes(user.id)) {
      channel?.members.push(user.id);
      await channel?.save();
    }
    res.status(200).json(channel);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function inviteChannel(req: Request, res: Response): Promise<void> {
  const { userId } = req.body;
  const { channelId } = req.params;

  try {
    const channel = await channelModel.findById(channelId);
    if (!channel?.members.includes(userId)) {
      channel?.members.push(userId);
      await channel?.save();
    }
    res.status(200).json(channel);
  } catch (error) {
    res.status(500).json({ message: error});
  }
}



export default { getChannels, createChannel, joinChannel ,inviteChannel};
